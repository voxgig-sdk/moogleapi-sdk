import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesMonstersSearchSearchMonster, MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesMonstersSearchSearchMonster> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity): MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesMonstersSearchSearchMonsterListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity[]>;
}
export { MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity };
