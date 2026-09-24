import { MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity } from './entity/MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity';
import { MoogleApiWebFeaturesCharactersGetGetCharacterEntity } from './entity/MoogleApiWebFeaturesCharactersGetGetCharacterEntity';
import { MoogleApiWebFeaturesCharactersSearchSearchResultEntity } from './entity/MoogleApiWebFeaturesCharactersSearchSearchResultEntity';
import { MoogleApiWebFeaturesGamesGetAllGameSummaryEntity } from './entity/MoogleApiWebFeaturesGamesGetAllGameSummaryEntity';
import { MoogleApiWebFeaturesGamesGetGetGameEntity } from './entity/MoogleApiWebFeaturesGamesGetGetGameEntity';
import { MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity } from './entity/MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity';
import { MoogleApiWebFeaturesMonstersGetGetMonsterEntity } from './entity/MoogleApiWebFeaturesMonstersGetGetMonsterEntity';
import { MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity } from './entity/MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity';
export type * from './MoogleapiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { MoogleapiEntityBase } from './MoogleapiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class MoogleapiSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    MoogleApiWebFeaturesCharactersGetAllCharacterSummary(entopts?: Record<string, any>): MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity;
    MoogleApiWebFeaturesCharactersGetGetCharacter(entopts?: Record<string, any>): MoogleApiWebFeaturesCharactersGetGetCharacterEntity;
    MoogleApiWebFeaturesCharactersSearchSearchResult(entopts?: Record<string, any>): MoogleApiWebFeaturesCharactersSearchSearchResultEntity;
    MoogleApiWebFeaturesGamesGetAllGameSummary(entopts?: Record<string, any>): MoogleApiWebFeaturesGamesGetAllGameSummaryEntity;
    MoogleApiWebFeaturesGamesGetGetGame(entopts?: Record<string, any>): MoogleApiWebFeaturesGamesGetGetGameEntity;
    MoogleApiWebFeaturesMonstersGetAllMonsterSummary(entopts?: Record<string, any>): MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity;
    MoogleApiWebFeaturesMonstersGetGetMonster(entopts?: Record<string, any>): MoogleApiWebFeaturesMonstersGetGetMonsterEntity;
    MoogleApiWebFeaturesMonstersSearchMonsterSearchResult(entopts?: Record<string, any>): MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): MoogleapiSDK;
    tester(testopts?: any, sdkopts?: any): MoogleapiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof MoogleapiSDK;
export { stdutil, config, BaseFeature, MoogleapiEntityBase, MoogleapiSDK, SDK, };
