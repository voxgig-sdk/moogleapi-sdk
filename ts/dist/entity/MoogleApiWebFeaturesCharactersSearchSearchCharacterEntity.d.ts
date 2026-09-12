import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesCharactersSearchSearchCharacter, MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesCharactersSearchSearchCharacter> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity): MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesCharactersSearchSearchCharacterListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity[]>;
}
export { MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity };
