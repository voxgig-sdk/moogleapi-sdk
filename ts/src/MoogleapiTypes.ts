// Typed models for the Moogleapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface MoogleApiWebFeaturesCharactersGetAllGetAllCharacter {
  game_name?: string
  id?: number
  image_url?: string
  name?: string
  role?: string
}

export interface MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch {
  game_name?: string
  id?: number
  image_url?: string
  name?: string
  role?: string
}

export interface MoogleApiWebFeaturesCharactersGetGetCharacter {
  affiliation?: string
  description?: string
  game_name?: string
  hometown?: string
  id?: number
  image_url?: string
  name?: string
  race?: string
  role?: string
}

export interface MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch {
  id: number
}

export interface MoogleApiWebFeaturesCharactersSearchSearchCharacter {
  description?: string
  game_name?: string
  id?: number
  image_url?: string
  name?: string
  role?: string
}

export interface MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch {
  description?: string
  game_name?: string
  id?: number
  image_url?: string
  name?: string
  role?: string
}

export interface MoogleApiWebFeaturesGamesGetAllGetAllGame {
  id?: number
  name?: string
  platform?: string
  release_year?: number
}

export interface MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch {
  id?: number
  name?: string
  platform?: string
  release_year?: number
}

export interface MoogleApiWebFeaturesGamesGetGetGame {
  character_count?: number
  description?: string
  id?: number
  monster_count?: number
  name?: string
  platform?: string
  release_year?: number
}

export interface MoogleApiWebFeaturesGamesGetGetGameLoadMatch {
  id: number
}

export interface MoogleApiWebFeaturesMonstersGetAllGetAllMonster {
  category?: string
  game_name?: string
  hit_point?: number
  id?: number
  name?: string
}

export interface MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch {
  category?: string
  game_name?: string
  hit_point?: number
  id?: number
  name?: string
}

export interface MoogleApiWebFeaturesMonstersGetGetMonster {
  category?: string
  description?: string
  game_name?: string
  hit_point?: number
  id?: number
  name?: string
}

export interface MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch {
  id: number
}

export interface MoogleApiWebFeaturesMonstersSearchSearchMonster {
  category?: string
  description?: string
  game_name?: string
  hit_point?: number
  id?: number
  name?: string
}

export interface MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch {
  category?: string
  description?: string
  game_name?: string
  hit_point?: number
  id?: number
  name?: string
}

