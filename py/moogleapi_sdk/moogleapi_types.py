# Typed models for the Moogleapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(TypedDict, total=False):
    gameName: str
    id: int
    imageUrl: str
    name: str
    role: str


class MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch(TypedDict, total=False):
    gameName: str
    id: int
    imageUrl: str
    name: str
    role: str


class MoogleApiWebFeaturesCharactersGetGetCharacter(TypedDict, total=False):
    affiliation: str
    description: str
    gameName: str
    hometown: str
    id: int
    imageUrl: str
    name: str
    race: str
    role: str


class MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch(TypedDict):
    id: int


class MoogleApiWebFeaturesCharactersSearchSearchCharacter(TypedDict, total=False):
    description: str
    gameName: str
    id: int
    imageUrl: str
    name: str
    role: str


class MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch(TypedDict, total=False):
    description: str
    gameName: str
    id: int
    imageUrl: str
    name: str
    role: str


class MoogleApiWebFeaturesGamesGetAllGetAllGame(TypedDict, total=False):
    id: int
    name: str
    platform: str
    releaseYear: int


class MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch(TypedDict, total=False):
    id: int
    name: str
    platform: str
    releaseYear: int


class MoogleApiWebFeaturesGamesGetGetGame(TypedDict, total=False):
    characterCount: int
    description: str
    id: int
    monsterCount: int
    name: str
    platform: str
    releaseYear: int


class MoogleApiWebFeaturesGamesGetGetGameLoadMatch(TypedDict):
    id: int


class MoogleApiWebFeaturesMonstersGetAllGetAllMonster(TypedDict, total=False):
    category: str
    gameName: str
    hitPoints: int
    id: int
    name: str


class MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch(TypedDict, total=False):
    category: str
    gameName: str
    hitPoints: int
    id: int
    name: str


class MoogleApiWebFeaturesMonstersGetGetMonster(TypedDict, total=False):
    category: str
    description: str
    gameName: str
    hitPoints: int
    id: int
    name: str


class MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch(TypedDict):
    id: int


class MoogleApiWebFeaturesMonstersSearchSearchMonster(TypedDict, total=False):
    category: str
    description: str
    gameName: str
    hitPoints: int
    id: int
    name: str


class MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch(TypedDict, total=False):
    category: str
    description: str
    gameName: str
    hitPoints: int
    id: int
    name: str
