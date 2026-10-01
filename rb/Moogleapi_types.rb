# frozen_string_literal: true

# Typed models for the Moogleapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# MoogleApiWebFeaturesCharactersGetGetCharacter entity data model.
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] gameName
#   @return [String, nil]
#
# @!attribute [rw] hometown
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] race
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
MoogleApiWebFeaturesCharactersGetGetCharacter = Struct.new(
  :affiliation,
  :description,
  :gameName,
  :hometown,
  :id,
  :imageUrl,
  :name,
  :race,
  :role,
  keyword_init: true
)

# Request payload for MoogleApiWebFeaturesCharactersGetGetCharacter#load.
#
# @!attribute [rw] id
#   @return [Integer]
MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for MoogleApiWebFeaturesCharactersGetGetCharacter#list.
#
# @!attribute [rw] game_id
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
MoogleApiWebFeaturesCharactersGetGetCharacterListMatch = Struct.new(
  :game_id,
  :page,
  :page_size,
  keyword_init: true
)

# MoogleApiWebFeaturesCharactersSearchSearchResult entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] gameName
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
MoogleApiWebFeaturesCharactersSearchSearchResult = Struct.new(
  :description,
  :gameName,
  :id,
  :imageUrl,
  :name,
  :role,
  keyword_init: true
)

# Request payload for MoogleApiWebFeaturesCharactersSearchSearchResult#list.
#
# @!attribute [rw] game_id
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String]
MoogleApiWebFeaturesCharactersSearchSearchResultListMatch = Struct.new(
  :game_id,
  :query,
  keyword_init: true
)

# MoogleApiWebFeaturesGamesGetGetGame entity data model.
#
# @!attribute [rw] characterCount
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] monsterCount
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] releaseYear
#   @return [Integer, nil]
MoogleApiWebFeaturesGamesGetGetGame = Struct.new(
  :characterCount,
  :description,
  :id,
  :monsterCount,
  :name,
  :platform,
  :releaseYear,
  keyword_init: true
)

# Request payload for MoogleApiWebFeaturesGamesGetGetGame#load.
#
# @!attribute [rw] id
#   @return [Integer]
MoogleApiWebFeaturesGamesGetGetGameLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for MoogleApiWebFeaturesGamesGetGetGame#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
MoogleApiWebFeaturesGamesGetGetGameListMatch = Struct.new(
  :page,
  :page_size,
  keyword_init: true
)

# MoogleApiWebFeaturesMonstersGetGetMonster entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] gameName
#   @return [String, nil]
#
# @!attribute [rw] hitPoints
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
MoogleApiWebFeaturesMonstersGetGetMonster = Struct.new(
  :category,
  :description,
  :gameName,
  :hitPoints,
  :id,
  :name,
  keyword_init: true
)

# Request payload for MoogleApiWebFeaturesMonstersGetGetMonster#load.
#
# @!attribute [rw] id
#   @return [Integer]
MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for MoogleApiWebFeaturesMonstersGetGetMonster#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] game_id
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
MoogleApiWebFeaturesMonstersGetGetMonsterListMatch = Struct.new(
  :category,
  :game_id,
  :page,
  :page_size,
  keyword_init: true
)

# MoogleApiWebFeaturesMonstersSearchMonsterSearchResult entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] gameName
#   @return [String, nil]
#
# @!attribute [rw] hitPoints
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
MoogleApiWebFeaturesMonstersSearchMonsterSearchResult = Struct.new(
  :category,
  :description,
  :gameName,
  :hitPoints,
  :id,
  :name,
  keyword_init: true
)

# Request payload for MoogleApiWebFeaturesMonstersSearchMonsterSearchResult#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] game_id
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String]
MoogleApiWebFeaturesMonstersSearchMonsterSearchResultListMatch = Struct.new(
  :category,
  :game_id,
  :query,
  keyword_init: true
)

