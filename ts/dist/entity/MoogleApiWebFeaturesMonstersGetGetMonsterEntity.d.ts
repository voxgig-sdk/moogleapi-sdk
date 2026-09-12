import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesMonstersGetGetMonster, MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesMonstersGetGetMonsterEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesMonstersGetGetMonster> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesMonstersGetGetMonsterEntity): MoogleApiWebFeaturesMonstersGetGetMonsterEntity;
    load(this: any, reqmatch?: MoogleApiWebFeaturesMonstersGetGetMonsterLoadMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesMonstersGetGetMonsterEntity>;
}
export { MoogleApiWebFeaturesMonstersGetGetMonsterEntity };
