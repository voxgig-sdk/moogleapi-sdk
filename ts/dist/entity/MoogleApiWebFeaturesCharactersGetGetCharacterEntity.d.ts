import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesCharactersGetGetCharacter, MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesCharactersGetGetCharacterEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesCharactersGetGetCharacter> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesCharactersGetGetCharacterEntity): MoogleApiWebFeaturesCharactersGetGetCharacterEntity;
    load(this: any, reqmatch?: MoogleApiWebFeaturesCharactersGetGetCharacterLoadMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesCharactersGetGetCharacterEntity>;
}
export { MoogleApiWebFeaturesCharactersGetGetCharacterEntity };
