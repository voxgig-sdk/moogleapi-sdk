import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesGamesGetGetGame, MoogleApiWebFeaturesGamesGetGetGameLoadMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesGamesGetGetGameEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesGamesGetGetGame> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesGamesGetGetGameEntity): MoogleApiWebFeaturesGamesGetGetGameEntity;
    load(this: any, reqmatch?: MoogleApiWebFeaturesGamesGetGetGameLoadMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesGamesGetGetGameEntity>;
}
export { MoogleApiWebFeaturesGamesGetGetGameEntity };
