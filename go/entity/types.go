// Typed models for the Moogleapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/moogleapi-sdk/go/core"
)

// MoogleApiWebFeaturesCharactersGetGetCharacter is the typed data model for the moogle_api_web_features_characters_get_get_character entity.
type MoogleApiWebFeaturesCharactersGetGetCharacter struct {
}

// MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch is the typed request payload for MoogleApiWebFeaturesCharactersGetGetCharacter.LoadTyped.
type MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch struct {
	Id int `json:"id"`
}

// MoogleApiWebFeaturesCharactersGetGetCharacterListMatch is the typed request payload for MoogleApiWebFeaturesCharactersGetGetCharacter.ListTyped.
type MoogleApiWebFeaturesCharactersGetGetCharacterListMatch struct {
	GameId *int `json:"game_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// MoogleApiWebFeaturesCharactersSearchSearchResult is the typed data model for the moogle_api_web_features_characters_search_search_result entity.
type MoogleApiWebFeaturesCharactersSearchSearchResult struct {
}

// MoogleApiWebFeaturesCharactersSearchSearchResultListMatch is the typed request payload for MoogleApiWebFeaturesCharactersSearchSearchResult.ListTyped.
type MoogleApiWebFeaturesCharactersSearchSearchResultListMatch struct {
	GameId *int `json:"game_id,omitempty"`
	Query string `json:"query"`
}

// MoogleApiWebFeaturesGamesGetGetGame is the typed data model for the moogle_api_web_features_games_get_get_game entity.
type MoogleApiWebFeaturesGamesGetGetGame struct {
}

// MoogleApiWebFeaturesGamesGetGetGameLoadMatch is the typed request payload for MoogleApiWebFeaturesGamesGetGetGame.LoadTyped.
type MoogleApiWebFeaturesGamesGetGetGameLoadMatch struct {
	Id int `json:"id"`
}

// MoogleApiWebFeaturesGamesGetGetGameListMatch is the typed request payload for MoogleApiWebFeaturesGamesGetGetGame.ListTyped.
type MoogleApiWebFeaturesGamesGetGetGameListMatch struct {
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// MoogleApiWebFeaturesMonstersGetGetMonster is the typed data model for the moogle_api_web_features_monsters_get_get_monster entity.
type MoogleApiWebFeaturesMonstersGetGetMonster struct {
}

// MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch is the typed request payload for MoogleApiWebFeaturesMonstersGetGetMonster.LoadTyped.
type MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch struct {
	Id int `json:"id"`
}

// MoogleApiWebFeaturesMonstersGetGetMonsterListMatch is the typed request payload for MoogleApiWebFeaturesMonstersGetGetMonster.ListTyped.
type MoogleApiWebFeaturesMonstersGetGetMonsterListMatch struct {
	Category *string `json:"category,omitempty"`
	GameId *int `json:"game_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// MoogleApiWebFeaturesMonstersSearchMonsterSearchResult is the typed data model for the moogle_api_web_features_monsters_search_monster_search_result entity.
type MoogleApiWebFeaturesMonstersSearchMonsterSearchResult struct {
}

// MoogleApiWebFeaturesMonstersSearchMonsterSearchResultListMatch is the typed request payload for MoogleApiWebFeaturesMonstersSearchMonsterSearchResult.ListTyped.
type MoogleApiWebFeaturesMonstersSearchMonsterSearchResultListMatch struct {
	Category *string `json:"category,omitempty"`
	GameId *int `json:"game_id,omitempty"`
	Query string `json:"query"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
