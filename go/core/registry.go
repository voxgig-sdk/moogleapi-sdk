package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewMoogleApiWebFeaturesCharactersGetGetCharacterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntityBase

var NewMoogleApiWebFeaturesCharactersSearchSearchResultEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntityBase

var NewMoogleApiWebFeaturesGamesGetGetGameEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntityBase

var NewMoogleApiWebFeaturesMonstersGetGetMonsterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntityBase

var NewMoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntityBase

