import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesGamesGetAllGameSummary, MoogleApiWebFeaturesGamesGetAllGameSummaryListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesGamesGetAllGameSummaryEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesGamesGetAllGameSummary> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesGamesGetAllGameSummaryEntity): MoogleApiWebFeaturesGamesGetAllGameSummaryEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesGamesGetAllGameSummaryListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesGamesGetAllGameSummaryEntity[]>;
}
export { MoogleApiWebFeaturesGamesGetAllGameSummaryEntity };
