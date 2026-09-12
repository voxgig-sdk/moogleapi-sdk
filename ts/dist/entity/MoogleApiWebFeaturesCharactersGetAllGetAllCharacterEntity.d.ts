import { MoogleapiEntityBase } from '../MoogleapiEntityBase';
import type { MoogleapiSDK } from '../MoogleapiSDK';
import type { Control } from '../types';
import type { MoogleApiWebFeaturesCharactersGetAllGetAllCharacter, MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch } from '../MoogleapiTypes';
declare class MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity extends MoogleapiEntityBase<MoogleApiWebFeaturesCharactersGetAllGetAllCharacter> {
    constructor(client: MoogleapiSDK, entopts: any);
    make(this: MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity): MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity;
    list(this: any, reqmatch?: MoogleApiWebFeaturesCharactersGetAllGetAllCharacterListMatch, ctrl?: Control): Promise<MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity[]>;
}
export { MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity };
