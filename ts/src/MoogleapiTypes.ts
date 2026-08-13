// Typed models for the Moogleapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface MoogleApiWebFeaturesCharactersGetAllGetAllCharacter {
  gameName?: string
  id?: number
  imageUrl?: string
  name?: string
  role?: string
}

export interface MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch {
  gameName?: string
  id?: number
  imageUrl?: string
  name?: string
  role?: string
}

export interface MoogleApiWebFeaturesCharactersGetGetCharacter {
  affiliation?: string
  description?: string
  gameName?: string
  hometown?: string
  id?: number
  imageUrl?: string
  name?: string
  race?: string
  role?: string
}

export interface MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch {
  id: number
}

export interface MoogleApiWebFeaturesCharactersSearchSearchCharacter {
  description?: string
  gameName?: string
  id?: number
  imageUrl?: string
  name?: string
  role?: string
}

export interface MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch {
  description?: string
  gameName?: string
  id?: number
  imageUrl?: string
  name?: string
  role?: string
}

export interface MoogleApiWebFeaturesGamesGetAllGetAllGame {
  id?: number
  name?: string
  platform?: string
  releaseYear?: number
}

export interface MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch {
  id?: number
  name?: string
  platform?: string
  releaseYear?: number
}

export interface MoogleApiWebFeaturesGamesGetGetGame {
  characterCount?: number
  description?: string
  id?: number
  monsterCount?: number
  name?: string
  platform?: string
  releaseYear?: number
}

export interface MoogleApiWebFeaturesGamesGetGetGameLoadMatch {
  id: number
}

export interface MoogleApiWebFeaturesMonstersGetAllGetAllMonster {
  category?: string
  gameName?: string
  hitPoints?: number
  id?: number
  name?: string
}

export interface MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch {
  category?: string
  gameName?: string
  hitPoints?: number
  id?: number
  name?: string
}

export interface MoogleApiWebFeaturesMonstersGetGetMonster {
  category?: string
  description?: string
  gameName?: string
  hitPoints?: number
  id?: number
  name?: string
}

export interface MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch {
  id: number
}

export interface MoogleApiWebFeaturesMonstersSearchSearchMonster {
  category?: string
  description?: string
  gameName?: string
  hitPoints?: number
  id?: number
  name?: string
}

export interface MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch {
  category?: string
  description?: string
  gameName?: string
  hitPoints?: number
  id?: number
  name?: string
}

