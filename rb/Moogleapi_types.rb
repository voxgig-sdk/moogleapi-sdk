# frozen_string_literal: true

# Typed models for the Moogleapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# MoogleApiWebFeaturesCharactersGetAllGetAllCharacter entity data model.
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
MoogleApiWebFeaturesCharactersGetAllGetAllCharacter = Struct.new(
  :game_name,
  :id,
  :image_url,
  :name,
  :role,
  keyword_init: true
)

# Match filter for MoogleApiWebFeaturesCharactersGetAllGetAllCharacter#list (any subset of MoogleApiWebFeaturesCharactersGetAllGetAllCharacter fields).
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch = Struct.new(
  :game_name,
  :id,
  :image_url,
  :name,
  :role,
  keyword_init: true
)

# MoogleApiWebFeaturesCharactersGetGetCharacter entity data model.
#
# @!attribute [rw] affiliation
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] hometown
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_url
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
  :game_name,
  :hometown,
  :id,
  :image_url,
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

# MoogleApiWebFeaturesCharactersSearchSearchCharacter entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
MoogleApiWebFeaturesCharactersSearchSearchCharacter = Struct.new(
  :description,
  :game_name,
  :id,
  :image_url,
  :name,
  :role,
  keyword_init: true
)

# Match filter for MoogleApiWebFeaturesCharactersSearchSearchCharacter#list (any subset of MoogleApiWebFeaturesCharactersSearchSearchCharacter fields).
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch = Struct.new(
  :description,
  :game_name,
  :id,
  :image_url,
  :name,
  :role,
  keyword_init: true
)

# MoogleApiWebFeaturesGamesGetAllGetAllGame entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] release_year
#   @return [Integer, nil]
MoogleApiWebFeaturesGamesGetAllGetAllGame = Struct.new(
  :id,
  :name,
  :platform,
  :release_year,
  keyword_init: true
)

# Match filter for MoogleApiWebFeaturesGamesGetAllGetAllGame#list (any subset of MoogleApiWebFeaturesGamesGetAllGetAllGame fields).
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] release_year
#   @return [Integer, nil]
MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch = Struct.new(
  :id,
  :name,
  :platform,
  :release_year,
  keyword_init: true
)

# MoogleApiWebFeaturesGamesGetGetGame entity data model.
#
# @!attribute [rw] character_count
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] monster_count
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] release_year
#   @return [Integer, nil]
MoogleApiWebFeaturesGamesGetGetGame = Struct.new(
  :character_count,
  :description,
  :id,
  :monster_count,
  :name,
  :platform,
  :release_year,
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

# MoogleApiWebFeaturesMonstersGetAllGetAllMonster entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] hit_point
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
MoogleApiWebFeaturesMonstersGetAllGetAllMonster = Struct.new(
  :category,
  :game_name,
  :hit_point,
  :id,
  :name,
  keyword_init: true
)

# Match filter for MoogleApiWebFeaturesMonstersGetAllGetAllMonster#list (any subset of MoogleApiWebFeaturesMonstersGetAllGetAllMonster fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] hit_point
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch = Struct.new(
  :category,
  :game_name,
  :hit_point,
  :id,
  :name,
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
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] hit_point
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
  :game_name,
  :hit_point,
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

# MoogleApiWebFeaturesMonstersSearchSearchMonster entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] hit_point
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
MoogleApiWebFeaturesMonstersSearchSearchMonster = Struct.new(
  :category,
  :description,
  :game_name,
  :hit_point,
  :id,
  :name,
  keyword_init: true
)

# Match filter for MoogleApiWebFeaturesMonstersSearchSearchMonster#list (any subset of MoogleApiWebFeaturesMonstersSearchSearchMonster fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] game_name
#   @return [String, nil]
#
# @!attribute [rw] hit_point
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch = Struct.new(
  :category,
  :description,
  :game_name,
  :hit_point,
  :id,
  :name,
  keyword_init: true
)

