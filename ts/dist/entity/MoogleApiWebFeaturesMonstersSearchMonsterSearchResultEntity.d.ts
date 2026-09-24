import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesMonstersSearchMonsterSearchResult, MoogleApiWebFeaturesMonstersSearchMonsterSearchResultListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesMonstersSearchMonsterSearchResult> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity): MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesMonstersSearchMonsterSearchResultListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity[]>;
}
export { MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity };
