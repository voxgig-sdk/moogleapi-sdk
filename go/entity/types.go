// Typed models for the Moogleapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/moogleapi-sdk/go/core"
)

// MoogleApiWebFeaturesCharactersGetAllGetAllCharacter is the typed data model for the moogle_api_web_features_characters_get_all_get_all_character entity.
type MoogleApiWebFeaturesCharactersGetAllGetAllCharacter struct {
	GameName *string `json:"gameName,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
}

// MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch is the typed request payload for MoogleApiWebFeaturesCharactersGetAllGetAllCharacter.ListTyped.
type MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch struct {
	GameId *int `json:"game_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// MoogleApiWebFeaturesCharactersGetGetCharacter is the typed data model for the moogle_api_web_features_characters_get_get_character entity.
type MoogleApiWebFeaturesCharactersGetGetCharacter struct {
	Affiliation *string `json:"affiliation,omitempty"`
	Description *string `json:"description,omitempty"`
	GameName *string `json:"gameName,omitempty"`
	Hometown *string `json:"hometown,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	Race *string `json:"race,omitempty"`
	Role *string `json:"role,omitempty"`
}

// MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch is the typed request payload for MoogleApiWebFeaturesCharactersGetGetCharacter.LoadTyped.
type MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch struct {
	Id int `json:"id"`
}

// MoogleApiWebFeaturesCharactersSearchSearchCharacter is the typed data model for the moogle_api_web_features_characters_search_search_character entity.
type MoogleApiWebFeaturesCharactersSearchSearchCharacter struct {
	Description *string `json:"description,omitempty"`
	GameName *string `json:"gameName,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
}

// MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch is the typed request payload for MoogleApiWebFeaturesCharactersSearchSearchCharacter.ListTyped.
type MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch struct {
	GameId *int `json:"game_id,omitempty"`
	Query string `json:"query"`
}

// MoogleApiWebFeaturesGamesGetAllGetAllGame is the typed data model for the moogle_api_web_features_games_get_all_get_all_game entity.
type MoogleApiWebFeaturesGamesGetAllGetAllGame struct {
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Platform *string `json:"platform,omitempty"`
	ReleaseYear *int `json:"releaseYear,omitempty"`
}

// MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch is the typed request payload for MoogleApiWebFeaturesGamesGetAllGetAllGame.ListTyped.
type MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch struct {
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// MoogleApiWebFeaturesGamesGetGetGame is the typed data model for the moogle_api_web_features_games_get_get_game entity.
type MoogleApiWebFeaturesGamesGetGetGame struct {
	CharacterCount *int `json:"characterCount,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	MonsterCount *int `json:"monsterCount,omitempty"`
	Name *string `json:"name,omitempty"`
	Platform *string `json:"platform,omitempty"`
	ReleaseYear *int `json:"releaseYear,omitempty"`
}

// MoogleApiWebFeaturesGamesGetGetGameLoadMatch is the typed request payload for MoogleApiWebFeaturesGamesGetGetGame.LoadTyped.
type MoogleApiWebFeaturesGamesGetGetGameLoadMatch struct {
	Id int `json:"id"`
}

// MoogleApiWebFeaturesMonstersGetAllGetAllMonster is the typed data model for the moogle_api_web_features_monsters_get_all_get_all_monster entity.
type MoogleApiWebFeaturesMonstersGetAllGetAllMonster struct {
	Category *string `json:"category,omitempty"`
	GameName *string `json:"gameName,omitempty"`
	HitPoints *int `json:"hitPoints,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch is the typed request payload for MoogleApiWebFeaturesMonstersGetAllGetAllMonster.ListTyped.
type MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch struct {
	Category *string `json:"category,omitempty"`
	GameId *int `json:"game_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// MoogleApiWebFeaturesMonstersGetGetMonster is the typed data model for the moogle_api_web_features_monsters_get_get_monster entity.
type MoogleApiWebFeaturesMonstersGetGetMonster struct {
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	GameName *string `json:"gameName,omitempty"`
	HitPoints *int `json:"hitPoints,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch is the typed request payload for MoogleApiWebFeaturesMonstersGetGetMonster.LoadTyped.
type MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch struct {
	Id int `json:"id"`
}

// MoogleApiWebFeaturesMonstersSearchSearchMonster is the typed data model for the moogle_api_web_features_monsters_search_search_monster entity.
type MoogleApiWebFeaturesMonstersSearchSearchMonster struct {
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	GameName *string `json:"gameName,omitempty"`
	HitPoints *int `json:"hitPoints,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch is the typed request payload for MoogleApiWebFeaturesMonstersSearchSearchMonster.ListTyped.
type MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch struct {
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
