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

func TestMoogleApiWebFeaturesCharactersSearchSearchCharacterEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil)
		if ent == nil {
			t.Fatal("expected non-nil MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"moogle_api_web_features_characters_search_search_character": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := moogle_api_web_features_characters_search_search_characterBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "moogle_api_web_features_characters_search_search_character." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_SEARCH_SEARCH_CHARACTER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		moogleApiWebFeaturesCharactersSearchSearchCharacterRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.moogle_api_web_features_characters_search_search_character", setup.data)))
		var moogleApiWebFeaturesCharactersSearchSearchCharacterRef01Data map[string]any
		if len(moogleApiWebFeaturesCharactersSearchSearchCharacterRef01DataRaw) > 0 {
			moogleApiWebFeaturesCharactersSearchSearchCharacterRef01Data = core.ToMapAny(moogleApiWebFeaturesCharactersSearchSearchCharacterRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = moogleApiWebFeaturesCharactersSearchSearchCharacterRef01Data

		// LIST
		moogleApiWebFeaturesCharactersSearchSearchCharacterRef01Ent := client.MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil)
		moogleApiWebFeaturesCharactersSearchSearchCharacterRef01Match := map[string]any{}

		moogleApiWebFeaturesCharactersSearchSearchCharacterRef01ListResult, err := moogleApiWebFeaturesCharactersSearchSearchCharacterRef01Ent.List(moogleApiWebFeaturesCharactersSearchSearchCharacterRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, moogleApiWebFeaturesCharactersSearchSearchCharacterRef01ListOk := moogleApiWebFeaturesCharactersSearchSearchCharacterRef01ListResult.([]any)
		if !moogleApiWebFeaturesCharactersSearchSearchCharacterRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", moogleApiWebFeaturesCharactersSearchSearchCharacterRef01ListResult)
		}

	})
}

func moogle_api_web_features_characters_search_search_characterBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "moogle_api_web_features_characters_search_search_character", "MoogleApiWebFeaturesCharactersSearchSearchCharacterTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read moogle_api_web_features_characters_search_search_character test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse moogle_api_web_features_characters_search_search_character test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"moogle_api_web_features_characters_search_search_character01", "moogle_api_web_features_characters_search_search_character02", "moogle_api_web_features_characters_search_search_character03"},
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
	entidEnvRaw := os.Getenv("MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_SEARCH_SEARCH_CHARACTER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_SEARCH_SEARCH_CHARACTER_ENTID": idmap,
		"MOOGLEAPI_TEST_LIVE":      "FALSE",
		"MOOGLEAPI_TEST_EXPLAIN":   "FALSE",
		"MOOGLEAPI_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_SEARCH_SEARCH_CHARACTER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MOOGLEAPI_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["MOOGLEAPI_APIKEY"],
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
