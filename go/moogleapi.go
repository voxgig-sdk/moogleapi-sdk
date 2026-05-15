package voxgigmoogleapisdk

import (
	"github.com/voxgig-sdk/moogleapi-sdk/core"
	"github.com/voxgig-sdk/moogleapi-sdk/entity"
	"github.com/voxgig-sdk/moogleapi-sdk/feature"
	_ "github.com/voxgig-sdk/moogleapi-sdk/utility"
)

// Type aliases preserve external API.
type MoogleapiSDK = core.MoogleapiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MoogleapiEntity = core.MoogleapiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MoogleapiError = core.MoogleapiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntity {
		return entity.NewMoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesCharactersGetGetCharacterEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntity {
		return entity.NewMoogleApiWebFeaturesCharactersGetGetCharacterEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesCharactersSearchSearchCharacterEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntity {
		return entity.NewMoogleApiWebFeaturesCharactersSearchSearchCharacterEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesGamesGetAllGetAllGameEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntity {
		return entity.NewMoogleApiWebFeaturesGamesGetAllGetAllGameEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesGamesGetGetGameEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntity {
		return entity.NewMoogleApiWebFeaturesGamesGetGetGameEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntity {
		return entity.NewMoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesMonstersGetGetMonsterEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntity {
		return entity.NewMoogleApiWebFeaturesMonstersGetGetMonsterEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesMonstersSearchSearchMonsterEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntity {
		return entity.NewMoogleApiWebFeaturesMonstersSearchSearchMonsterEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMoogleapiSDK = core.NewMoogleapiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
