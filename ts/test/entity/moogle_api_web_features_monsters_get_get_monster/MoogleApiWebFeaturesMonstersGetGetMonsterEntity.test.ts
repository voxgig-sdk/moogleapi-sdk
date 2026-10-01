

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MoogleapiSDK, BaseFeature, stdutil } from '../../..'

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


describe('MoogleApiWebFeaturesMonstersGetGetMonsterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MOOGLEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MOOGLEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MoogleapiSDK.test()
    const ent = testsdk.MoogleApiWebFeaturesMonstersGetGetMonster()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MOOGLEAPI_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'moogle_api_web_features_monsters_get_get_monster.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"t":"`$STRING`","key$":"category","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"gameName":{"a":true,"h":"Game Name","n":"gameName","r":false,"t":"`$STRING`","key$":"gameName","index$":2},"hitPoints":{"a":true,"fo":"int32","h":"Hit Points","n":"hitPoints","r":false,"t":"`$INTEGER`","key$":"hitPoints","index$":3},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5}},"id":{"field":"id","name":"id"},"name":"moogle_api_web_features_monsters_get_get_monster","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/monsters","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"game_id","or":"gameId","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":20,"k":"query","n":"page_size","or":"pageSize","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/api/monsters","q":{"exist":["category","game_id","page","page_size"]},"r":{},"s":[{"lit":"api"},{"lit":"monsters"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/monsters/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/monsters/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"monsters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"moogle_api_web_features_monsters_get_get_monster","name__orig":"moogle_api_web_features_monsters_get_get_monster","Name":"MoogleApiWebFeaturesMonstersGetGetMonster","name_":"moogle_api_web_features_monsters_get_get_monster","name-":"moogle-api-web-features-monsters-get-get-monster","NAME":"MOOGLE_API_WEB_FEATURES_MONSTERS_GET_GET_MONSTER","index$":3}, {"active":true,"entity":"moogle_api_web_features_monsters_get_get_monster","key$":"BasicMoogleApiWebFeaturesMonstersGetGetMonsterFlow","kind":"basic","name":"BasicMoogleApiWebFeaturesMonstersGetGetMonsterFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"moogle_api_web_features_monsters_get_get_monster_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"moogle_api_web_features_monsters_get_get_monster_ref01","srcdatavar":"moogle_api_web_features_monsters_get_get_monster_ref01_data","suffix":"_dt0"},"m":{"id":"moogle_api_web_features_monsters_get_get_monster01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-moogle_api_web_features_monsters_get_get_monster_ref01"}}],"index$":1}]}, 'MoogleApiWebFeaturesMonstersGetGetMonster', {"GET /api/monsters":{"protocol":"http","parameters":[{"name":"gameId","in":"query","schema":{"type":"integer","format":"int32","nullable":true},"index$":0},{"name":"category","in":"query","schema":{"type":"string","nullable":true},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1,"nullable":false},"index$":2},{"name":"pageSize","in":"query","schema":{"type":"integer","format":"int32","default":20,"nullable":false},"index$":3}]},"GET /api/monsters/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let moogle_api_web_features_monsters_get_get_monster_ref01_data = Object.values(setup.data.existing.moogle_api_web_features_monsters_get_get_monster)[0] as any

    // LIST
    const moogle_api_web_features_monsters_get_get_monster_ref01_ent = client.MoogleApiWebFeaturesMonstersGetGetMonster()
    const moogle_api_web_features_monsters_get_get_monster_ref01_match: any = {}

    const moogle_api_web_features_monsters_get_get_monster_ref01_list = (await moogle_api_web_features_monsters_get_get_monster_ref01_ent.list(moogle_api_web_features_monsters_get_get_monster_ref01_match)).map((e: any) => e.data())


    // LOAD
    const moogle_api_web_features_monsters_get_get_monster_ref01_match_dt0: any = {}
    moogle_api_web_features_monsters_get_get_monster_ref01_match_dt0.id = moogle_api_web_features_monsters_get_get_monster_ref01_data.id
    const moogle_api_web_features_monsters_get_get_monster_ref01_data_dt0 = (await moogle_api_web_features_monsters_get_get_monster_ref01_ent.load(moogle_api_web_features_monsters_get_get_monster_ref01_match_dt0)).data()
    assert(moogle_api_web_features_monsters_get_get_monster_ref01_data_dt0.id === moogle_api_web_features_monsters_get_get_monster_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/moogle_api_web_features_monsters_get_get_monster/MoogleApiWebFeaturesMonstersGetGetMonsterTestData.json')

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
    ['moogle_api_web_features_monsters_get_get_monster01','moogle_api_web_features_monsters_get_get_monster02','moogle_api_web_features_monsters_get_get_monster03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_GET_GET_MONSTER_ENTID': idmap,
    'MOOGLEAPI_TEST_LIVE': 'FALSE',
    'MOOGLEAPI_TEST_EXPLAIN': 'FALSE',
    'MOOGLEAPI_APIKEY': '',
  })

  idmap = env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_GET_GET_MONSTER_ENTID']

  const live = 'TRUE' === env.MOOGLEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_GET_GET_MONSTER_ENTID']
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
  
