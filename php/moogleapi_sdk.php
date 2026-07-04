<?php
declare(strict_types=1);

// Moogleapi SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

class MoogleapiSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new MoogleapiUtility();
        $this->_utility = $utility;

        $config = MoogleapiConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features from config.
        $feature_opts = MoogleapiHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $items = Struct::items($feature_opts);
            if ($items) {
                foreach ($items as $item) {
                    $fname = $item[0];
                    $fopts = MoogleapiHelpers::to_map($item[1]);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, MoogleapiFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return MoogleapiUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = MoogleapiHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = MoogleapiHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = MoogleapiHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new MoogleapiSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = MoogleapiHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = MoogleapiHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_moogle_api_web_features_characters_get_all_get_all_character = null;

    // Idiomatic facade: $client->moogle_api_web_features_characters_get_all_get_all_character()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias MoogleApiWebFeaturesCharactersGetAllGetAllCharacter() (PHP method
    // names are case-insensitive).
    public function moogle_api_web_features_characters_get_all_get_all_character($data = null)
    {
        require_once __DIR__ . '/entity/moogle_api_web_features_characters_get_all_get_all_character_entity.php';
        if ($data === null) {
            if ($this->_moogle_api_web_features_characters_get_all_get_all_character === null) {
                $this->_moogle_api_web_features_characters_get_all_get_all_character = new MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity($this, null);
            }
            return $this->_moogle_api_web_features_characters_get_all_get_all_character;
        }
        return new MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity($this, $data);
    }


    private $_moogle_api_web_features_characters_get_get_character = null;

    // Idiomatic facade: $client->moogle_api_web_features_characters_get_get_character()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias MoogleApiWebFeaturesCharactersGetGetCharacter() (PHP method
    // names are case-insensitive).
    public function moogle_api_web_features_characters_get_get_character($data = null)
    {
        require_once __DIR__ . '/entity/moogle_api_web_features_characters_get_get_character_entity.php';
        if ($data === null) {
            if ($this->_moogle_api_web_features_characters_get_get_character === null) {
                $this->_moogle_api_web_features_characters_get_get_character = new MoogleApiWebFeaturesCharactersGetGetCharacterEntity($this, null);
            }
            return $this->_moogle_api_web_features_characters_get_get_character;
        }
        return new MoogleApiWebFeaturesCharactersGetGetCharacterEntity($this, $data);
    }


    private $_moogle_api_web_features_characters_search_search_character = null;

    // Idiomatic facade: $client->moogle_api_web_features_characters_search_search_character()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias MoogleApiWebFeaturesCharactersSearchSearchCharacter() (PHP method
    // names are case-insensitive).
    public function moogle_api_web_features_characters_search_search_character($data = null)
    {
        require_once __DIR__ . '/entity/moogle_api_web_features_characters_search_search_character_entity.php';
        if ($data === null) {
            if ($this->_moogle_api_web_features_characters_search_search_character === null) {
                $this->_moogle_api_web_features_characters_search_search_character = new MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity($this, null);
            }
            return $this->_moogle_api_web_features_characters_search_search_character;
        }
        return new MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity($this, $data);
    }


    private $_moogle_api_web_features_games_get_all_get_all_game = null;

    // Idiomatic facade: $client->moogle_api_web_features_games_get_all_get_all_game()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias MoogleApiWebFeaturesGamesGetAllGetAllGame() (PHP method
    // names are case-insensitive).
    public function moogle_api_web_features_games_get_all_get_all_game($data = null)
    {
        require_once __DIR__ . '/entity/moogle_api_web_features_games_get_all_get_all_game_entity.php';
        if ($data === null) {
            if ($this->_moogle_api_web_features_games_get_all_get_all_game === null) {
                $this->_moogle_api_web_features_games_get_all_get_all_game = new MoogleApiWebFeaturesGamesGetAllGetAllGameEntity($this, null);
            }
            return $this->_moogle_api_web_features_games_get_all_get_all_game;
        }
        return new MoogleApiWebFeaturesGamesGetAllGetAllGameEntity($this, $data);
    }


    private $_moogle_api_web_features_games_get_get_game = null;

    // Idiomatic facade: $client->moogle_api_web_features_games_get_get_game()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias MoogleApiWebFeaturesGamesGetGetGame() (PHP method
    // names are case-insensitive).
    public function moogle_api_web_features_games_get_get_game($data = null)
    {
        require_once __DIR__ . '/entity/moogle_api_web_features_games_get_get_game_entity.php';
        if ($data === null) {
            if ($this->_moogle_api_web_features_games_get_get_game === null) {
                $this->_moogle_api_web_features_games_get_get_game = new MoogleApiWebFeaturesGamesGetGetGameEntity($this, null);
            }
            return $this->_moogle_api_web_features_games_get_get_game;
        }
        return new MoogleApiWebFeaturesGamesGetGetGameEntity($this, $data);
    }


    private $_moogle_api_web_features_monsters_get_all_get_all_monster = null;

    // Idiomatic facade: $client->moogle_api_web_features_monsters_get_all_get_all_monster()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias MoogleApiWebFeaturesMonstersGetAllGetAllMonster() (PHP method
    // names are case-insensitive).
    public function moogle_api_web_features_monsters_get_all_get_all_monster($data = null)
    {
        require_once __DIR__ . '/entity/moogle_api_web_features_monsters_get_all_get_all_monster_entity.php';
        if ($data === null) {
            if ($this->_moogle_api_web_features_monsters_get_all_get_all_monster === null) {
                $this->_moogle_api_web_features_monsters_get_all_get_all_monster = new MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity($this, null);
            }
            return $this->_moogle_api_web_features_monsters_get_all_get_all_monster;
        }
        return new MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity($this, $data);
    }


    private $_moogle_api_web_features_monsters_get_get_monster = null;

    // Idiomatic facade: $client->moogle_api_web_features_monsters_get_get_monster()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias MoogleApiWebFeaturesMonstersGetGetMonster() (PHP method
    // names are case-insensitive).
    public function moogle_api_web_features_monsters_get_get_monster($data = null)
    {
        require_once __DIR__ . '/entity/moogle_api_web_features_monsters_get_get_monster_entity.php';
        if ($data === null) {
            if ($this->_moogle_api_web_features_monsters_get_get_monster === null) {
                $this->_moogle_api_web_features_monsters_get_get_monster = new MoogleApiWebFeaturesMonstersGetGetMonsterEntity($this, null);
            }
            return $this->_moogle_api_web_features_monsters_get_get_monster;
        }
        return new MoogleApiWebFeaturesMonstersGetGetMonsterEntity($this, $data);
    }


    private $_moogle_api_web_features_monsters_search_search_monster = null;

    // Idiomatic facade: $client->moogle_api_web_features_monsters_search_search_monster()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias MoogleApiWebFeaturesMonstersSearchSearchMonster() (PHP method
    // names are case-insensitive).
    public function moogle_api_web_features_monsters_search_search_monster($data = null)
    {
        require_once __DIR__ . '/entity/moogle_api_web_features_monsters_search_search_monster_entity.php';
        if ($data === null) {
            if ($this->_moogle_api_web_features_monsters_search_search_monster === null) {
                $this->_moogle_api_web_features_monsters_search_search_monster = new MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity($this, null);
            }
            return $this->_moogle_api_web_features_monsters_search_search_monster;
        }
        return new MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new MoogleapiSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
