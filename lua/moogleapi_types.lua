-- Typed models for the Moogleapi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class MoogleApiWebFeaturesCharactersGetAllCharacterSummary
---@field gameName? string
---@field id? number
---@field imageUrl? string
---@field name? string
---@field role? string

---@class MoogleApiWebFeaturesCharactersGetAllCharacterSummaryListMatch
---@field game_id? number
---@field page? number
---@field page_size? number

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

---@class MoogleApiWebFeaturesCharactersSearchSearchResult
---@field description? string
---@field gameName? string
---@field id? number
---@field imageUrl? string
---@field name? string
---@field role? string

---@class MoogleApiWebFeaturesCharactersSearchSearchResultListMatch
---@field game_id? number
---@field query string

---@class MoogleApiWebFeaturesGamesGetAllGameSummary
---@field id? number
---@field name? string
---@field platform? string
---@field releaseYear? number

---@class MoogleApiWebFeaturesGamesGetAllGameSummaryListMatch
---@field page? number
---@field page_size? number

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

---@class MoogleApiWebFeaturesMonstersGetAllMonsterSummary
---@field category? string
---@field gameName? string
---@field hitPoints? number
---@field id? number
---@field name? string

---@class MoogleApiWebFeaturesMonstersGetAllMonsterSummaryListMatch
---@field category? string
---@field game_id? number
---@field page? number
---@field page_size? number

---@class MoogleApiWebFeaturesMonstersGetGetMonster
---@field category? string
---@field description? string
---@field gameName? string
---@field hitPoints? number
---@field id? number
---@field name? string

---@class MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch
---@field id number

---@class MoogleApiWebFeaturesMonstersSearchMonsterSearchResult
---@field category? string
---@field description? string
---@field gameName? string
---@field hitPoints? number
---@field id? number
---@field name? string

---@class MoogleApiWebFeaturesMonstersSearchMonsterSearchResultListMatch
---@field category? string
---@field game_id? number
---@field query string

local M = {}

return M
