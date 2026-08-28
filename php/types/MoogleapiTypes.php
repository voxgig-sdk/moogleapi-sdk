<?php
declare(strict_types=1);

// Typed models for the Moogleapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** MoogleApiWebFeaturesCharactersGetAllGetAllCharacter entity data model. */
class MoogleApiWebFeaturesCharactersGetAllGetAllCharacter
{
    public ?string $gameName = null;
    public ?int $id = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?string $role = null;
}

/** Request payload for MoogleApiWebFeaturesCharactersGetAllGetAllCharacter#list. */
class MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch
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

/** MoogleApiWebFeaturesCharactersSearchSearchCharacter entity data model. */
class MoogleApiWebFeaturesCharactersSearchSearchCharacter
{
    public ?string $description = null;
    public ?string $gameName = null;
    public ?int $id = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?string $role = null;
}

/** Request payload for MoogleApiWebFeaturesCharactersSearchSearchCharacter#list. */
class MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch
{
    public ?int $game_id = null;
    public string $query;
}

/** MoogleApiWebFeaturesGamesGetAllGetAllGame entity data model. */
class MoogleApiWebFeaturesGamesGetAllGetAllGame
{
    public ?int $id = null;
    public ?string $name = null;
    public ?string $platform = null;
    public ?int $releaseYear = null;
}

/** Request payload for MoogleApiWebFeaturesGamesGetAllGetAllGame#list. */
class MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch
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

/** MoogleApiWebFeaturesMonstersGetAllGetAllMonster entity data model. */
class MoogleApiWebFeaturesMonstersGetAllGetAllMonster
{
    public ?string $category = null;
    public ?string $gameName = null;
    public ?int $hitPoints = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Request payload for MoogleApiWebFeaturesMonstersGetAllGetAllMonster#list. */
class MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch
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

/** MoogleApiWebFeaturesMonstersSearchSearchMonster entity data model. */
class MoogleApiWebFeaturesMonstersSearchSearchMonster
{
    public ?string $category = null;
    public ?string $description = null;
    public ?string $gameName = null;
    public ?int $hitPoints = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Request payload for MoogleApiWebFeaturesMonstersSearchSearchMonster#list. */
class MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch
{
    public ?string $category = null;
    public ?int $game_id = null;
    public string $query;
}

