package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/moogleapi-sdk/go"
	"github.com/voxgig-sdk/moogleapi-sdk/go/core"

	vs "github.com/voxgig-sdk/moogleapi-sdk/go/utility/struct"
)

func TestMoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.MoogleApiWebFeaturesMonstersGetAllGetAllMonster(nil)
		if ent == nil {
			t.Fatal("expected non-nil MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := moogle_api_web_features_monsters_get_all_get_all_monsterBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "moogle_api_web_features_monsters_get_all_get_all_monster." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_GET_ALL_GET_ALL_MONSTER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.moogle_api_web_features_monsters_get_all_get_all_monster", setup.data)))
		var moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01Data map[string]any
		if len(moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01DataRaw) > 0 {
			moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01Data = core.ToMapAny(moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01Data

		// LIST
		moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01Ent := client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster(nil)
		moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01Match := map[string]any{}

		moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01ListResult, err := moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01Ent.List(moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01ListOk := moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01ListResult.([]any)
		if !moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", moogleApiWebFeaturesMonstersGetAllGetAllMonsterRef01ListResult)
		}

	})
}

func moogle_api_web_features_monsters_get_all_get_all_monsterBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "moogle_api_web_features_monsters_get_all_get_all_monster", "MoogleApiWebFeaturesMonstersGetAllGetAllMonsterTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read moogle_api_web_features_monsters_get_all_get_all_monster test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse moogle_api_web_features_monsters_get_all_get_all_monster test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"moogle_api_web_features_monsters_get_all_get_all_monster01", "moogle_api_web_features_monsters_get_all_get_all_monster02", "moogle_api_web_features_monsters_get_all_get_all_monster03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_GET_ALL_GET_ALL_MONSTER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_GET_ALL_GET_ALL_MONSTER_ENTID": idmap,
		"MOOGLEAPI_TEST_LIVE":      "FALSE",
		"MOOGLEAPI_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_GET_ALL_GET_ALL_MONSTER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MOOGLEAPI_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewMoogleapiSDK(core.ToMapAny(mergedOpts))
	}

	live := env["MOOGLEAPI_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["MOOGLEAPI_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
