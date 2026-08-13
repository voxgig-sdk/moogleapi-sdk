-- Typed models for the Moogleapi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class MoogleApiWebFeaturesCharactersGetAllGetAllCharacter
---@field gameName? string
---@field id? number
---@field imageUrl? string
---@field name? string
---@field role? string

---@class MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch
---@field gameName? string
---@field id? number
---@field imageUrl? string
---@field name? string
---@field role? string

---@class MoogleApiWebFeaturesCharactersGetGetCharacter
---@field affiliation? string
---@field description? string
---@field gameName? string
---@field hometown? string
---@field id? number
---@field imageUrl? string
---@field name? string
---@field race? string
---@field role? string

---@class MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch
---@field id number

---@class MoogleApiWebFeaturesCharactersSearchSearchCharacter
---@field description? string
---@field gameName? string
---@field id? number
---@field imageUrl? string
---@field name? string
---@field role? string

---@class MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch
---@field description? string
---@field gameName? string
---@field id? number
---@field imageUrl? string
---@field name? string
---@field role? string

---@class MoogleApiWebFeaturesGamesGetAllGetAllGame
---@field id? number
---@field name? string
---@field platform? string
---@field releaseYear? number

---@class MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch
---@field id? number
---@field name? string
---@field platform? string
---@field releaseYear? number

---@class MoogleApiWebFeaturesGamesGetGetGame
---@field characterCount? number
---@field description? string
---@field id? number
---@field monsterCount? number
---@field name? string
---@field platform? string
---@field releaseYear? number

---@class MoogleApiWebFeaturesGamesGetGetGameLoadMatch
---@field id number

---@class MoogleApiWebFeaturesMonstersGetAllGetAllMonster
---@field category? string
---@field gameName? string
---@field hitPoints? number
---@field id? number
---@field name? string

---@class MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch
---@field category? string
---@field gameName? string
---@field hitPoints? number
---@field id? number
---@field name? string

---@class MoogleApiWebFeaturesMonstersGetGetMonster
---@field category? string
---@field description? string
---@field gameName? string
---@field hitPoints? number
---@field id? number
---@field name? string

---@class MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch
---@field id number

---@class MoogleApiWebFeaturesMonstersSearchSearchMonster
---@field category? string
---@field description? string
---@field gameName? string
---@field hitPoints? number
---@field id? number
---@field name? string

---@class MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch
---@field category? string
---@field description? string
---@field gameName? string
---@field hitPoints? number
---@field id? number
---@field name? string

local M = {}

return M
