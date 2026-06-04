<?php
declare(strict_types=1);

// MoogleApiWebFeaturesCharactersGetGetCharacter entity test

require_once __DIR__ . '/../moogleapi_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class MoogleApiWebFeaturesCharactersGetGetCharacterEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MoogleapiSDK::test(null, null);
        $ent = $testsdk->MoogleApiWebFeaturesCharactersGetGetCharacter(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = moogle_api_web_features_characters_get_get_character_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "moogle_api_web_features_characters_get_get_character." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $moogle_api_web_features_characters_get_get_character_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.moogle_api_web_features_characters_get_get_character")));
        $moogle_api_web_features_characters_get_get_character_ref01_data = null;
        if (count($moogle_api_web_features_characters_get_get_character_ref01_data_raw) > 0) {
            $moogle_api_web_features_characters_get_get_character_ref01_data = Helpers::to_map($moogle_api_web_features_characters_get_get_character_ref01_data_raw[0][1]);
        }

        // LOAD
        $moogle_api_web_features_characters_get_get_character_ref01_ent = $client->MoogleApiWebFeaturesCharactersGetGetCharacter(null);
        $moogle_api_web_features_characters_get_get_character_ref01_match_dt0 = [
            "id" => $moogle_api_web_features_characters_get_get_character_ref01_data["id"],
        ];
        [$moogle_api_web_features_characters_get_get_character_ref01_data_dt0_loaded, $err] = $moogle_api_web_features_characters_get_get_character_ref01_ent->load($moogle_api_web_features_characters_get_get_character_ref01_match_dt0, null);
        $this->assertNull($err);
        $moogle_api_web_features_characters_get_get_character_ref01_data_dt0_load_result = Helpers::to_map($moogle_api_web_features_characters_get_get_character_ref01_data_dt0_loaded);
        $this->assertNotNull($moogle_api_web_features_characters_get_get_character_ref01_data_dt0_load_result);
        $this->assertEquals($moogle_api_web_features_characters_get_get_character_ref01_data_dt0_load_result["id"], $moogle_api_web_features_characters_get_get_character_ref01_data["id"]);

    }
}

function moogle_api_web_features_characters_get_get_character_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/moogle_api_web_features_characters_get_get_character/MoogleApiWebFeaturesCharactersGetGetCharacterTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MoogleapiSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["moogle_api_web_features_characters_get_get_character01", "moogle_api_web_features_characters_get_get_character02", "moogle_api_web_features_characters_get_get_character03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER_ENTID" => $idmap,
        "MOOGLEAPI_TEST_LIVE" => "FALSE",
        "MOOGLEAPI_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["MOOGLEAPI_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new MoogleapiSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["MOOGLEAPI_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["MOOGLEAPI_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
