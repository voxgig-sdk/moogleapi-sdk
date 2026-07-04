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
    public ?string $game_name = null;
    public ?int $id = null;
    public ?string $image_url = null;
    public ?string $name = null;
    public ?string $role = null;
}

/** Match filter for MoogleApiWebFeaturesCharactersGetAllGetAllCharacter#list (any subset of MoogleApiWebFeaturesCharactersGetAllGetAllCharacter fields). */
class MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch
{
    public ?string $game_name = null;
    public ?int $id = null;
    public ?string $image_url = null;
    public ?string $name = null;
    public ?string $role = null;
}

/** MoogleApiWebFeaturesCharactersGetGetCharacter entity data model. */
class MoogleApiWebFeaturesCharactersGetGetCharacter
{
    public ?string $affiliation = null;
    public ?string $description = null;
    public ?string $game_name = null;
    public ?string $hometown = null;
    public ?int $id = null;
    public ?string $image_url = null;
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
    public ?string $game_name = null;
    public ?int $id = null;
    public ?string $image_url = null;
    public ?string $name = null;
    public ?string $role = null;
}

/** Match filter for MoogleApiWebFeaturesCharactersSearchSearchCharacter#list (any subset of MoogleApiWebFeaturesCharactersSearchSearchCharacter fields). */
class MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch
{
    public ?string $description = null;
    public ?string $game_name = null;
    public ?int $id = null;
    public ?string $image_url = null;
    public ?string $name = null;
    public ?string $role = null;
}

/** MoogleApiWebFeaturesGamesGetAllGetAllGame entity data model. */
class MoogleApiWebFeaturesGamesGetAllGetAllGame
{
    public ?int $id = null;
    public ?string $name = null;
    public ?string $platform = null;
    public ?int $release_year = null;
}

/** Match filter for MoogleApiWebFeaturesGamesGetAllGetAllGame#list (any subset of MoogleApiWebFeaturesGamesGetAllGetAllGame fields). */
class MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch
{
    public ?int $id = null;
    public ?string $name = null;
    public ?string $platform = null;
    public ?int $release_year = null;
}

/** MoogleApiWebFeaturesGamesGetGetGame entity data model. */
class MoogleApiWebFeaturesGamesGetGetGame
{
    public ?int $character_count = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?int $monster_count = null;
    public ?string $name = null;
    public ?string $platform = null;
    public ?int $release_year = null;
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
    public ?string $game_name = null;
    public ?int $hit_point = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Match filter for MoogleApiWebFeaturesMonstersGetAllGetAllMonster#list (any subset of MoogleApiWebFeaturesMonstersGetAllGetAllMonster fields). */
class MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch
{
    public ?string $category = null;
    public ?string $game_name = null;
    public ?int $hit_point = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** MoogleApiWebFeaturesMonstersGetGetMonster entity data model. */
class MoogleApiWebFeaturesMonstersGetGetMonster
{
    public ?string $category = null;
    public ?string $description = null;
    public ?string $game_name = null;
    public ?int $hit_point = null;
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
    public ?string $game_name = null;
    public ?int $hit_point = null;
    public ?int $id = null;
    public ?string $name = null;
}

/** Match filter for MoogleApiWebFeaturesMonstersSearchSearchMonster#list (any subset of MoogleApiWebFeaturesMonstersSearchSearchMonster fields). */
class MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch
{
    public ?string $category = null;
    public ?string $description = null;
    public ?string $game_name = null;
    public ?int $hit_point = null;
    public ?int $id = null;
    public ?string $name = null;
}

