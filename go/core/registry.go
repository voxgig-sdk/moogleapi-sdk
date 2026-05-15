package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewMoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesCharactersGetGetCharacterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesCharactersSearchSearchCharacterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesGamesGetAllGetAllGameEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesGamesGetGetGameEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesMonstersGetGetMonsterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

var NewMoogleApiWebFeaturesMonstersSearchSearchMonsterEntityFunc func(client *MoogleapiSDK, entopts map[string]any) MoogleapiEntity

