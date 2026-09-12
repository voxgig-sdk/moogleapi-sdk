import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesGamesGetAllGetAllGame, MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesGamesGetAllGetAllGameEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesGamesGetAllGetAllGame> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesGamesGetAllGetAllGameEntity): MoogleApiWebFeaturesGamesGetAllGetAllGameEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesGamesGetAllGetAllGameListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesGamesGetAllGetAllGameEntity[]>;
}
export { MoogleApiWebFeaturesGamesGetAllGetAllGameEntity };
