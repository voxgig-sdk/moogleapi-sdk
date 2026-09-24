import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesMonstersGetAllMonsterSummary, MoogleApiWebFeaturesMonstersGetAllMonsterSummaryListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesMonstersGetAllMonsterSummary> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity): MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesMonstersGetAllMonsterSummaryListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity[]>;
}
export { MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity };
