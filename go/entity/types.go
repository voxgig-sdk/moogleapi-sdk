// Typed models for the Moogleapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// MoogleApiWebFeaturesCharactersGetAllGetAllCharacter is the typed data model for the moogle_api_web_features_characters_get_all_get_all_character entity.
type MoogleApiWebFeaturesCharactersGetAllGetAllCharacter struct {
	GameName *string `json:"game_name,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
}

// MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch is the typed request payload for MoogleApiWebFeaturesCharactersGetAllGetAllCharacter.ListTyped.
type MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch struct {
	GameName *string `json:"game_name,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
}

// MoogleApiWebFeaturesCharactersGetGetCharacter is the typed data model for the moogle_api_web_features_characters_get_get_character entity.
type MoogleApiWebFeaturesCharactersGetGetCharacter struct {
	Affiliation *string `json:"affiliation,omitempty"`
	Description *string `json:"description,omitempty"`
	GameName *string `json:"game_name,omitempty"`
	Hometown *string `json:"hometown,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
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
	GameName *string `json:"game_name,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
}

// MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch is the typed request payload for MoogleApiWebFeaturesCharactersSearchSearchCharacter.ListTyped.
type MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch struct {
	Description *string `json:"description,omitempty"`
	GameName *string `json:"game_name,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
}

// MoogleApiWebFeaturesGamesGetAllGetAllGame is the typed data model for the moogle_api_web_features_games_get_all_get_all_game entity.
type MoogleApiWebFeaturesGamesGetAllGetAllGame struct {
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Platform *string `json:"platform,omitempty"`
	ReleaseYear *int `json:"release_year,omitempty"`
}

// MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch is the typed request payload for MoogleApiWebFeaturesGamesGetAllGetAllGame.ListTyped.
type MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch struct {
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Platform *string `json:"platform,omitempty"`
	ReleaseYear *int `json:"release_year,omitempty"`
}

// MoogleApiWebFeaturesGamesGetGetGame is the typed data model for the moogle_api_web_features_games_get_get_game entity.
type MoogleApiWebFeaturesGamesGetGetGame struct {
	CharacterCount *int `json:"character_count,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	MonsterCount *int `json:"monster_count,omitempty"`
	Name *string `json:"name,omitempty"`
	Platform *string `json:"platform,omitempty"`
	ReleaseYear *int `json:"release_year,omitempty"`
}

// MoogleApiWebFeaturesGamesGetGetGameLoadMatch is the typed request payload for MoogleApiWebFeaturesGamesGetGetGame.LoadTyped.
type MoogleApiWebFeaturesGamesGetGetGameLoadMatch struct {
	Id int `json:"id"`
}

// MoogleApiWebFeaturesMonstersGetAllGetAllMonster is the typed data model for the moogle_api_web_features_monsters_get_all_get_all_monster entity.
type MoogleApiWebFeaturesMonstersGetAllGetAllMonster struct {
	Category *string `json:"category,omitempty"`
	GameName *string `json:"game_name,omitempty"`
	HitPoint *int `json:"hit_point,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch is the typed request payload for MoogleApiWebFeaturesMonstersGetAllGetAllMonster.ListTyped.
type MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch struct {
	Category *string `json:"category,omitempty"`
	GameName *string `json:"game_name,omitempty"`
	HitPoint *int `json:"hit_point,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// MoogleApiWebFeaturesMonstersGetGetMonster is the typed data model for the moogle_api_web_features_monsters_get_get_monster entity.
type MoogleApiWebFeaturesMonstersGetGetMonster struct {
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	GameName *string `json:"game_name,omitempty"`
	HitPoint *int `json:"hit_point,omitempty"`
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
	GameName *string `json:"game_name,omitempty"`
	HitPoint *int `json:"hit_point,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch is the typed request payload for MoogleApiWebFeaturesMonstersSearchSearchMonster.ListTyped.
type MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch struct {
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	GameName *string `json:"game_name,omitempty"`
	HitPoint *int `json:"hit_point,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
