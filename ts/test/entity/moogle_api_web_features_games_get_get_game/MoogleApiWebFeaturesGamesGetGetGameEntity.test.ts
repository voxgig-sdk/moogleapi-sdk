

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MoogleapiSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('MoogleApiWebFeaturesGamesGetGetGameEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MOOGLEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MOOGLEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MoogleapiSDK.test()
    const ent = testsdk.MoogleApiWebFeaturesGamesGetGetGame()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('moogle_api_web_features_games_get_get_game hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of MoogleapiSDK.test(offline).MoogleApiWebFeaturesGamesGetGetGame().stream('list')) { }
    }, /offline/)

    for await (const _item of MoogleapiSDK.test(offline).MoogleApiWebFeaturesGamesGetGetGame()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = MoogleapiSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.MoogleApiWebFeaturesGamesGetGetGame().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of MoogleapiSDK.test().MoogleApiWebFeaturesGamesGetGetGame().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new MoogleapiSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.MoogleApiWebFeaturesGamesGetGetGame().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.MoogleApiWebFeaturesGamesGetGetGame().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = MoogleapiSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.MoogleApiWebFeaturesGamesGetGetGame().list({"page":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MOOGLEAPI_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'moogle_api_web_features_games_get_get_game.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"characterCount":{"a":true,"fo":"int32","h":"Character Count","n":"characterCount","r":false,"t":"`$INTEGER`","key$":"characterCount","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":2},"monsterCount":{"a":true,"fo":"int32","h":"Monster Count","n":"monsterCount","r":false,"t":"`$INTEGER`","key$":"monsterCount","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":4},"platform":{"a":true,"h":"Platform","n":"platform","r":false,"t":"`$STRING`","key$":"platform","index$":5},"releaseYear":{"a":true,"fo":"int32","h":"Release Year","n":"releaseYear","r":false,"t":"`$INTEGER`","key$":"releaseYear","index$":6}},"id":{"field":"id","name":"id"},"name":"moogle_api_web_features_games_get_get_game","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/games","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"page_size","or":"pageSize","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/games","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"games"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/games/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/games/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"games"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"moogle_api_web_features_games_get_get_game","name__orig":"moogle_api_web_features_games_get_get_game","Name":"MoogleApiWebFeaturesGamesGetGetGame","name_":"moogle_api_web_features_games_get_get_game","name-":"moogle-api-web-features-games-get-get-game","NAME":"MOOGLE_API_WEB_FEATURES_GAMES_GET_GET_GAME","index$":2}, {"active":true,"entity":"moogle_api_web_features_games_get_get_game","key$":"BasicMoogleApiWebFeaturesGamesGetGetGameFlow","kind":"basic","name":"BasicMoogleApiWebFeaturesGamesGetGetGameFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"moogle_api_web_features_games_get_get_game_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"moogle_api_web_features_games_get_get_game_ref01","srcdatavar":"moogle_api_web_features_games_get_get_game_ref01_data","suffix":"_dt0"},"m":{"id":"moogle_api_web_features_games_get_get_game01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-moogle_api_web_features_games_get_get_game_ref01"}}],"index$":1,"route":"GET /api/games/{id}","record":{}}]}, 'MoogleApiWebFeaturesGamesGetGetGame', {"GET /api/games":{"protocol":"http","parameters":[{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1,"nullable":false},"index$":0},{"name":"pageSize","in":"query","schema":{"type":"integer","format":"int32","default":20,"nullable":false},"index$":1}]},"GET /api/games/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let moogle_api_web_features_games_get_get_game_ref01_data = Object.values(setup.data.existing.moogle_api_web_features_games_get_get_game)[0] as any

    // LIST
    const moogle_api_web_features_games_get_get_game_ref01_ent = client.MoogleApiWebFeaturesGamesGetGetGame()
    const moogle_api_web_features_games_get_get_game_ref01_match: any = {}

    const moogle_api_web_features_games_get_get_game_ref01_list = (await moogle_api_web_features_games_get_get_game_ref01_ent.list(moogle_api_web_features_games_get_get_game_ref01_match)).map((e: any) => e.data())


    // LOAD
    const moogle_api_web_features_games_get_get_game_ref01_match_dt0: any = {}
    moogle_api_web_features_games_get_get_game_ref01_match_dt0.id = moogle_api_web_features_games_get_get_game_ref01_data.id
    const moogle_api_web_features_games_get_get_game_ref01_data_dt0 = (await moogle_api_web_features_games_get_get_game_ref01_ent.load(moogle_api_web_features_games_get_get_game_ref01_match_dt0)).data()
    assert(moogle_api_web_features_games_get_get_game_ref01_data_dt0.id === moogle_api_web_features_games_get_get_game_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/moogle_api_web_features_games_get_get_game/MoogleApiWebFeaturesGamesGetGetGameTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MoogleapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['moogle_api_web_features_games_get_get_game01','moogle_api_web_features_games_get_get_game02','moogle_api_web_features_games_get_get_game03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_GAMES_GET_GET_GAME_ENTID': idmap,
    'MOOGLEAPI_TEST_LIVE': 'FALSE',
    'MOOGLEAPI_TEST_EXPLAIN': 'FALSE',
    'MOOGLEAPI_APIKEY': '',
  })

  idmap = env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_GAMES_GET_GET_GAME_ENTID']

  const live = 'TRUE' === env.MOOGLEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_GAMES_GET_GET_GAME_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MoogleapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.MOOGLEAPI_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MOOGLEAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
