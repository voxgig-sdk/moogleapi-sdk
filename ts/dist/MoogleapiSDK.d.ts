import { MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity } from './entity/MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity';
import { MoogleApiWebFeaturesCharactersGetGetCharacterEntity } from './entity/MoogleApiWebFeaturesCharactersGetGetCharacterEntity';
import { MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity } from './entity/MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity';
import { MoogleApiWebFeaturesGamesGetAllGetAllGameEntity } from './entity/MoogleApiWebFeaturesGamesGetAllGetAllGameEntity';
import { MoogleApiWebFeaturesGamesGetGetGameEntity } from './entity/MoogleApiWebFeaturesGamesGetGetGameEntity';
import { MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity } from './entity/MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity';
import { MoogleApiWebFeaturesMonstersGetGetMonsterEntity } from './entity/MoogleApiWebFeaturesMonstersGetGetMonsterEntity';
import { MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity } from './entity/MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity';
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
    MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(entopts?: Record<string, any>): MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity;
    MoogleApiWebFeaturesCharactersGetGetCharacter(entopts?: Record<string, any>): MoogleApiWebFeaturesCharactersGetGetCharacterEntity;
    MoogleApiWebFeaturesCharactersSearchSearchCharacter(entopts?: Record<string, any>): MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity;
    MoogleApiWebFeaturesGamesGetAllGetAllGame(entopts?: Record<string, any>): MoogleApiWebFeaturesGamesGetAllGetAllGameEntity;
    MoogleApiWebFeaturesGamesGetGetGame(entopts?: Record<string, any>): MoogleApiWebFeaturesGamesGetGetGameEntity;
    MoogleApiWebFeaturesMonstersGetAllGetAllMonster(entopts?: Record<string, any>): MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity;
    MoogleApiWebFeaturesMonstersGetGetMonster(entopts?: Record<string, any>): MoogleApiWebFeaturesMonstersGetGetMonsterEntity;
    MoogleApiWebFeaturesMonstersSearchSearchMonster(entopts?: Record<string, any>): MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity;
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
