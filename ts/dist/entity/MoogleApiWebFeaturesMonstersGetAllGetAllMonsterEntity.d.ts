import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesMonstersGetAllGetAllMonster, MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesMonstersGetAllGetAllMonster> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity): MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesMonstersGetAllGetAllMonsterListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity[]>;
}
export { MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity };
