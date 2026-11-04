package voxgigmoogleapisdk

import (
	"github.com/voxgig-sdk/moogleapi-sdk/go/core"
	"github.com/voxgig-sdk/moogleapi-sdk/go/entity"
	"github.com/voxgig-sdk/moogleapi-sdk/go/feature"
	_ "github.com/voxgig-sdk/moogleapi-sdk/go/utility"
)

// Type aliases preserve external API.
type MoogleapiSDK = core.MoogleapiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MoogleapiEntityBase = core.MoogleapiEntityBase

// Deprecated: use MoogleapiEntityBase.
type MoogleapiEntity = core.MoogleapiEntityBase

type StreamItem = core.StreamItem
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
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewMoogleApiWebFeaturesCharactersGetGetCharacterEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntityBase {
		return entity.NewMoogleApiWebFeaturesCharactersGetGetCharacterEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesCharactersSearchSearchResultEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntityBase {
		return entity.NewMoogleApiWebFeaturesCharactersSearchSearchResultEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesGamesGetGetGameEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntityBase {
		return entity.NewMoogleApiWebFeaturesGamesGetGetGameEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesMonstersGetGetMonsterEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntityBase {
		return entity.NewMoogleApiWebFeaturesMonstersGetGetMonsterEntity(client, entopts)
	}
	core.NewMoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntityFunc = func(client *core.MoogleapiSDK, entopts map[string]any) core.MoogleapiEntityBase {
		return entity.NewMoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity(client, entopts)
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
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMoogleapiSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MoogleapiSDK  { return NewMoogleapiSDK(nil) }
func Test() *MoogleapiSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
