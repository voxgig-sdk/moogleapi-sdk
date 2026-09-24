export interface MoogleApiWebFeaturesCharactersGetAllCharacterSummary {
    gameName?: string;
    id?: number;
    imageUrl?: string;
    name?: string;
    role?: string;
}
export interface MoogleApiWebFeaturesCharactersGetAllCharacterSummaryListMatch {
    game_id?: number;
    page?: number;
    page_size?: number;
}
export interface MoogleApiWebFeaturesCharactersGetGetCharacter {
    affiliation?: string;
    description?: string;
    gameName?: string;
    hometown?: string;
    id?: number;
    imageUrl?: string;
    name?: string;
    race?: string;
    role?: string;
}
export interface MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch {
    id: number;
}
export interface MoogleApiWebFeaturesCharactersSearchSearchResult {
    description?: string;
    gameName?: string;
    id?: number;
    imageUrl?: string;
    name?: string;
    role?: string;
}
export interface MoogleApiWebFeaturesCharactersSearchSearchResultListMatch {
    game_id?: number;
    query: string;
}
export interface MoogleApiWebFeaturesGamesGetAllGameSummary {
    id?: number;
    name?: string;
    platform?: string;
    releaseYear?: number;
}
export interface MoogleApiWebFeaturesGamesGetAllGameSummaryListMatch {
    page?: number;
    page_size?: number;
}
export interface MoogleApiWebFeaturesGamesGetGetGame {
    characterCount?: number;
    description?: string;
    id?: number;
    monsterCount?: number;
    name?: string;
    platform?: string;
    releaseYear?: number;
}
export interface MoogleApiWebFeaturesGamesGetGetGameLoadMatch {
    id: number;
}
export interface MoogleApiWebFeaturesMonstersGetAllMonsterSummary {
    category?: string;
    gameName?: string;
    hitPoints?: number;
    id?: number;
    name?: string;
}
export interface MoogleApiWebFeaturesMonstersGetAllMonsterSummaryListMatch {
    category?: string;
    game_id?: number;
    page?: number;
    page_size?: number;
}
export interface MoogleApiWebFeaturesMonstersGetGetMonster {
    category?: string;
    description?: string;
    gameName?: string;
    hitPoints?: number;
    id?: number;
    name?: string;
}
export interface MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch {
    id: number;
}
export interface MoogleApiWebFeaturesMonstersSearchMonsterSearchResult {
    category?: string;
    description?: string;
    gameName?: string;
    hitPoints?: number;
    id?: number;
    name?: string;
}
export interface MoogleApiWebFeaturesMonstersSearchMonsterSearchResultListMatch {
    category?: string;
    game_id?: number;
    query: string;
}
