# Typed models for the Moogleapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class MoogleApiWebFeaturesCharactersGetAllGetAllCharacter:
    game_name: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    name: Optional[str] = None
    role: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch:
    game_name: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    name: Optional[str] = None
    role: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesCharactersGetGetCharacter:
    affiliation: Optional[str] = None
    description: Optional[str] = None
    game_name: Optional[str] = None
    hometown: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    name: Optional[str] = None
    race: Optional[str] = None
    role: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch:
    id: int


@dataclass
class MoogleApiWebFeaturesCharactersSearchSearchCharacter:
    description: Optional[str] = None
    game_name: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    name: Optional[str] = None
    role: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch:
    description: Optional[str] = None
    game_name: Optional[str] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    name: Optional[str] = None
    role: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesGamesGetAllGetAllGame:
    id: Optional[int] = None
    name: Optional[str] = None
    platform: Optional[str] = None
    release_year: Optional[int] = None


@dataclass
class MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch:
    id: Optional[int] = None
    name: Optional[str] = None
    platform: Optional[str] = None
    release_year: Optional[int] = None


@dataclass
class MoogleApiWebFeaturesGamesGetGetGame:
    character_count: Optional[int] = None
    description: Optional[str] = None
    id: Optional[int] = None
    monster_count: Optional[int] = None
    name: Optional[str] = None
    platform: Optional[str] = None
    release_year: Optional[int] = None


@dataclass
class MoogleApiWebFeaturesGamesGetGetGameLoadMatch:
    id: int


@dataclass
class MoogleApiWebFeaturesMonstersGetAllGetAllMonster:
    category: Optional[str] = None
    game_name: Optional[str] = None
    hit_point: Optional[int] = None
    id: Optional[int] = None
    name: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch:
    category: Optional[str] = None
    game_name: Optional[str] = None
    hit_point: Optional[int] = None
    id: Optional[int] = None
    name: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesMonstersGetGetMonster:
    category: Optional[str] = None
    description: Optional[str] = None
    game_name: Optional[str] = None
    hit_point: Optional[int] = None
    id: Optional[int] = None
    name: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch:
    id: int


@dataclass
class MoogleApiWebFeaturesMonstersSearchSearchMonster:
    category: Optional[str] = None
    description: Optional[str] = None
    game_name: Optional[str] = None
    hit_point: Optional[int] = None
    id: Optional[int] = None
    name: Optional[str] = None


@dataclass
class MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch:
    category: Optional[str] = None
    description: Optional[str] = None
    game_name: Optional[str] = None
    hit_point: Optional[int] = None
    id: Optional[int] = None
    name: Optional[str] = None

