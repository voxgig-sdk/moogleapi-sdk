<?php
declare(strict_types=1);

// Typed models for the Moogleapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** MoogleApiWebFeaturesCharactersGetAllCharacterSummary entity data model. */
class MoogleApiWebFeaturesCharactersGetAllCharacterSummary
{
    public ?string $gameName = null;
    public ?int $id = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?string $role = null;
}

/** Request payload for MoogleApiWebFeaturesCharactersGetAllCharacterSummary#list. */
class MoogleApiWebFeaturesCharactersGetAllCharacterSummaryListMatch
{
    public ?int $game_id = null;
    public ?int $page = null;
    public ?int $page_size = null;
}

/** MoogleApiWebFeaturesCharactersGetGetCharacter entity data model. */
class MoogleApiWebFeaturesCharactersGetGetCharacter
{
    public ?string $affiliation = null;
    public ?string $description = null;
    public ?string $gameName = null;
    public ?string $hometown = null;
    public ?int $id = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?string $race = null;
    public ?string $role = null;
}

/** Request payload for MoogleApiWebFeaturesCharactersGetGetCharacter#load. */
class MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch
{
    public int $id;
}

/** MoogleApiWebFeaturesCharactersSearchSearchResult entity data model. */
class MoogleApiWebFeaturesCharactersSearchSearchResult
{
    public ?string $description = null;
    public ?string $gameName = null;
    public ?int $id = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?string $role = null;
}

/** Request payload for MoogleApiWebFeaturesCharactersSearchSearchResult#list. */
class MoogleApiWebFeaturesCharactersSearchSearchResultListMatch
{
    public ?int $game_id = null;
    public string $query;
}

/** MoogleApiWebFeaturesGamesGetAllGameSummary entity data model. */
class MoogleApiWebFeaturesGamesGetAllGameSummary
{
    public ?int $id = null;
    public ?string $name = null;
    public ?string $platform = null;
    public ?int $releaseYear = null;
}

/** Request payload for MoogleApiWebFeaturesGamesGetAllGameSummary#list. */
class MoogleApiWebFeaturesGamesGetAllGameSummaryListMatch
{
    public ?int $page = null;
    public ?int $page_size = null;
}

/** MoogleApiWebFeaturesGamesGetGetGame entity data model. */
class MoogleApiWebFeaturesGamesGetGetGame
{
    public ?int $characterCount = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?int $monsterCount = null;
    public ?string $name = null;
    public ?string $platform = null;
    public ?int $releaseYear = null;
}

/** Request payload for MoogleApiWebFeaturesGamesGetGetGame#load. */
class MoogleApiWebFeaturesGamesGetGetGameLoadMatch
{
    public int $id;
}

/** MoogleApiWebFeaturesMonstersGetAllMonsterSummary entity data model. */
class MoogleApiWebFeaturesMonstersGetAllMonsterSummary
{
    public ?string $category = null;
    public ?string $gameName = null;
    public ?int $hitPoints = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Request payload for MoogleApiWebFeaturesMonstersGetAllMonsterSummary#list. */
class MoogleApiWebFeaturesMonstersGetAllMonsterSummaryListMatch
{
    public ?string $category = null;
    public ?int $game_id = null;
    public ?int $page = null;
    public ?int $page_size = null;
}

/** MoogleApiWebFeaturesMonstersGetGetMonster entity data model. */
class MoogleApiWebFeaturesMonstersGetGetMonster
{
    public ?string $category = null;
    public ?string $description = null;
    public ?string $gameName = null;
    public ?int $hitPoints = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Request payload for MoogleApiWebFeaturesMonstersGetGetMonster#load. */
class MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch
{
    public int $id;
}

/** MoogleApiWebFeaturesMonstersSearchMonsterSearchResult entity data model. */
class MoogleApiWebFeaturesMonstersSearchMonsterSearchResult
{
    public ?string $category = null;
    public ?string $description = null;
    public ?string $gameName = null;
    public ?int $hitPoints = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Request payload for MoogleApiWebFeaturesMonstersSearchMonsterSearchResult#list. */
class MoogleApiWebFeaturesMonstersSearchMonsterSearchResultListMatch
{
    public ?string $category = null;
    public ?int $game_id = null;
    public string $query;
}

