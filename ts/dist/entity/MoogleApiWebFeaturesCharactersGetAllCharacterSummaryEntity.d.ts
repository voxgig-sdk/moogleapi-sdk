import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesCharactersGetAllCharacterSummary, MoogleApiWebFeaturesCharactersGetAllCharacterSummaryListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesCharactersGetAllCharacterSummary> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity): MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesCharactersGetAllCharacterSummaryListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity[]>;
}
export { MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity };
