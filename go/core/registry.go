package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewMoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesCharactersGetGetCharacterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesCharactersSearchSearchResultEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesGamesGetAllGameSummaryEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesGamesGetGetGameEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesMonstersGetGetMonsterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

