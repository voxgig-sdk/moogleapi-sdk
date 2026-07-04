// Moogleapi Ts SDK

import { MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity } from './entity/MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity'
import { MoogleApiWebFeaturesCharactersGetGetCharacterEntity } from './entity/MoogleApiWebFeaturesCharactersGetGetCharacterEntity'
import { MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity } from './entity/MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity'
import { MoogleApiWebFeaturesGamesGetAllGetAllGameEntity } from './entity/MoogleApiWebFeaturesGamesGetAllGetAllGameEntity'
import { MoogleApiWebFeaturesGamesGetGetGameEntity } from './entity/MoogleApiWebFeaturesGamesGetGetGameEntity'
import { MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity } from './entity/MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity'
import { MoogleApiWebFeaturesMonstersGetGetMonsterEntity } from './entity/MoogleApiWebFeaturesMonstersGetGetMonsterEntity'
import { MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity } from './entity/MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity'

export type * from './MoogleapiTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { MoogleapiEntityBase } from './MoogleapiEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class MoogleapiSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  _moogle_api_web_features_characters_get_all_get_all_character?: MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity

  // Idiomatic facade: `client.moogle_api_web_features_characters_get_all_get_all_character.list()` / `client.moogle_api_web_features_characters_get_all_get_all_character.load({ id })`.
  get moogle_api_web_features_characters_get_all_get_all_character(): MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity {
    return (this._moogle_api_web_features_characters_get_all_get_all_character ??= new MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity(this, undefined))
  }

  /** @deprecated Use `client.moogle_api_web_features_characters_get_all_get_all_character` instead. */
  MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(data?: any) {
    const self = this
    return new MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity(self,data)
  }


  _moogle_api_web_features_characters_get_get_character?: MoogleApiWebFeaturesCharactersGetGetCharacterEntity

  // Idiomatic facade: `client.moogle_api_web_features_characters_get_get_character.list()` / `client.moogle_api_web_features_characters_get_get_character.load({ id })`.
  get moogle_api_web_features_characters_get_get_character(): MoogleApiWebFeaturesCharactersGetGetCharacterEntity {
    return (this._moogle_api_web_features_characters_get_get_character ??= new MoogleApiWebFeaturesCharactersGetGetCharacterEntity(this, undefined))
  }

  /** @deprecated Use `client.moogle_api_web_features_characters_get_get_character` instead. */
  MoogleApiWebFeaturesCharactersGetGetCharacter(data?: any) {
    const self = this
    return new MoogleApiWebFeaturesCharactersGetGetCharacterEntity(self,data)
  }


  _moogle_api_web_features_characters_search_search_character?: MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity

  // Idiomatic facade: `client.moogle_api_web_features_characters_search_search_character.list()` / `client.moogle_api_web_features_characters_search_search_character.load({ id })`.
  get moogle_api_web_features_characters_search_search_character(): MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity {
    return (this._moogle_api_web_features_characters_search_search_character ??= new MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity(this, undefined))
  }

  /** @deprecated Use `client.moogle_api_web_features_characters_search_search_character` instead. */
  MoogleApiWebFeaturesCharactersSearchSearchCharacter(data?: any) {
    const self = this
    return new MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity(self,data)
  }


  _moogle_api_web_features_games_get_all_get_all_game?: MoogleApiWebFeaturesGamesGetAllGetAllGameEntity

  // Idiomatic facade: `client.moogle_api_web_features_games_get_all_get_all_game.list()` / `client.moogle_api_web_features_games_get_all_get_all_game.load({ id })`.
  get moogle_api_web_features_games_get_all_get_all_game(): MoogleApiWebFeaturesGamesGetAllGetAllGameEntity {
    return (this._moogle_api_web_features_games_get_all_get_all_game ??= new MoogleApiWebFeaturesGamesGetAllGetAllGameEntity(this, undefined))
  }

  /** @deprecated Use `client.moogle_api_web_features_games_get_all_get_all_game` instead. */
  MoogleApiWebFeaturesGamesGetAllGetAllGame(data?: any) {
    const self = this
    return new MoogleApiWebFeaturesGamesGetAllGetAllGameEntity(self,data)
  }


  _moogle_api_web_features_games_get_get_game?: MoogleApiWebFeaturesGamesGetGetGameEntity

  // Idiomatic facade: `client.moogle_api_web_features_games_get_get_game.list()` / `client.moogle_api_web_features_games_get_get_game.load({ id })`.
  get moogle_api_web_features_games_get_get_game(): MoogleApiWebFeaturesGamesGetGetGameEntity {
    return (this._moogle_api_web_features_games_get_get_game ??= new MoogleApiWebFeaturesGamesGetGetGameEntity(this, undefined))
  }

  /** @deprecated Use `client.moogle_api_web_features_games_get_get_game` instead. */
  MoogleApiWebFeaturesGamesGetGetGame(data?: any) {
    const self = this
    return new MoogleApiWebFeaturesGamesGetGetGameEntity(self,data)
  }


  _moogle_api_web_features_monsters_get_all_get_all_monster?: MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity

  // Idiomatic facade: `client.moogle_api_web_features_monsters_get_all_get_all_monster.list()` / `client.moogle_api_web_features_monsters_get_all_get_all_monster.load({ id })`.
  get moogle_api_web_features_monsters_get_all_get_all_monster(): MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity {
    return (this._moogle_api_web_features_monsters_get_all_get_all_monster ??= new MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity(this, undefined))
  }

  /** @deprecated Use `client.moogle_api_web_features_monsters_get_all_get_all_monster` instead. */
  MoogleApiWebFeaturesMonstersGetAllGetAllMonster(data?: any) {
    const self = this
    return new MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity(self,data)
  }


  _moogle_api_web_features_monsters_get_get_monster?: MoogleApiWebFeaturesMonstersGetGetMonsterEntity

  // Idiomatic facade: `client.moogle_api_web_features_monsters_get_get_monster.list()` / `client.moogle_api_web_features_monsters_get_get_monster.load({ id })`.
  get moogle_api_web_features_monsters_get_get_monster(): MoogleApiWebFeaturesMonstersGetGetMonsterEntity {
    return (this._moogle_api_web_features_monsters_get_get_monster ??= new MoogleApiWebFeaturesMonstersGetGetMonsterEntity(this, undefined))
  }

  /** @deprecated Use `client.moogle_api_web_features_monsters_get_get_monster` instead. */
  MoogleApiWebFeaturesMonstersGetGetMonster(data?: any) {
    const self = this
    return new MoogleApiWebFeaturesMonstersGetGetMonsterEntity(self,data)
  }


  _moogle_api_web_features_monsters_search_search_monster?: MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity

  // Idiomatic facade: `client.moogle_api_web_features_monsters_search_search_monster.list()` / `client.moogle_api_web_features_monsters_search_search_monster.load({ id })`.
  get moogle_api_web_features_monsters_search_search_monster(): MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity {
    return (this._moogle_api_web_features_monsters_search_search_monster ??= new MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity(this, undefined))
  }

  /** @deprecated Use `client.moogle_api_web_features_monsters_search_search_monster` instead. */
  MoogleApiWebFeaturesMonstersSearchSearchMonster(data?: any) {
    const self = this
    return new MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new MoogleapiSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return MoogleapiSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Moogleapi' }
  }

  toString() {
    return 'Moogleapi ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = MoogleapiSDK


export {
  stdutil,

  BaseFeature,
  MoogleapiEntityBase,

  MoogleapiSDK,
  SDK,
}


