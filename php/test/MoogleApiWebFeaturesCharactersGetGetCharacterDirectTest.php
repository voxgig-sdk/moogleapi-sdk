<?php
declare(strict_types=1);

// MoogleApiWebFeaturesCharactersGetGetCharacter direct test

require_once __DIR__ . '/../moogleapi_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class MoogleApiWebFeaturesCharactersGetGetCharacterDirectTest extends TestCase
{
    public function test_direct_load_moogle_api_web_features_characters_get_get_character(): void
    {
        $setup = moogle_api_web_features_characters_get_get_character_direct_setup(["id" => "direct01"]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-load-moogle_api_web_features_characters_get_get_character", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        if ($setup["live"]) {
            $this->markTestSkipped("live direct-load needs real ID — set *_ENTID env var with real IDs to run");
            return;
        }
        $client = $setup["client"];

        $params = [];
        $query = [];
        if (!$setup["live"]) {
            $params["id"] = "direct01";
        }

        [$result, $err] = $client->direct([
            "path" => "api/characters/{id}",
            "method" => "GET",
            "params" => $params,
            "query" => $query,
        ]);
        if ($setup["live"]) {
            // Live mode is lenient: synthetic IDs frequently 4xx. Skip
            // rather than fail when the load endpoint isn't reachable
            // with the IDs we can construct from setup.idmap.
            if ($err !== null) {
                $this->markTestSkipped("load call failed (likely synthetic IDs against live API): " . (string)$err);
                return;
            }
            if (empty($result["ok"])) {
                $this->markTestSkipped("load call not ok (likely synthetic IDs against live API)");
                return;
            }
            $status = Helpers::to_int($result["status"]);
            if ($status < 200 || $status >= 300) {
                $this->markTestSkipped("expected 2xx status, got " . $status);
                return;
            }
        } else {
            $this->assertNull($err);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertNotNull($result["data"]);
            if (is_array($result["data"]) && isset($result["data"]["id"])) {
                $this->assertEquals("direct01", $result["data"]["id"]);
            }
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function moogle_api_web_features_characters_get_get_character_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER_ENTID" => [],
        "MOOGLEAPI_TEST_LIVE" => "FALSE",
        "MOOGLEAPI_APIKEY" => "NONE",
    ]);

    $live = $env["MOOGLEAPI_TEST_LIVE"] === "TRUE";

    if ($live) {
        $merged_opts = [
            "apikey" => $env["MOOGLEAPI_APIKEY"],
        ];
        $client = new MoogleapiSDK($merged_opts);
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new MoogleapiSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
