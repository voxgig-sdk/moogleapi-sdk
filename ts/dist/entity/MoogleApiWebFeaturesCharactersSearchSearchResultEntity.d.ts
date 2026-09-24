import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesCharactersSearchSearchResult, MoogleApiWebFeaturesCharactersSearchSearchResultListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesCharactersSearchSearchResultEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesCharactersSearchSearchResult> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesCharactersSearchSearchResultEntity): MoogleApiWebFeaturesCharactersSearchSearchResultEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesCharactersSearchSearchResultListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesCharactersSearchSearchResultEntity[]>;
}
export { MoogleApiWebFeaturesCharactersSearchSearchResultEntity };
