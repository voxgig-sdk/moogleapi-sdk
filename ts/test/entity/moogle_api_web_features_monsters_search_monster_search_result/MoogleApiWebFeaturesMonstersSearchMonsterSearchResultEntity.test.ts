

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


describe('MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MOOGLEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MOOGLEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MoogleapiSDK.test()
    const ent = testsdk.MoogleApiWebFeaturesMonstersSearchMonsterSearchResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MOOGLEAPI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'moogle_api_web_features_monsters_search_monster_search_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"t":"`$STRING`","key$":"category","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"gameName":{"a":true,"h":"Game Name","n":"gameName","r":false,"t":"`$STRING`","key$":"gameName","index$":2},"hitPoints":{"a":true,"fo":"int32","h":"Hit Points","n":"hitPoints","r":false,"t":"`$INTEGER`","key$":"hitPoints","index$":3},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5}},"id":{"field":"id","name":"id"},"name":"moogle_api_web_features_monsters_search_monster_search_result","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/monsters/search","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"game_id","or":"game_id","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/monsters/search","q":{"exist":["category","game_id","query"]},"r":{},"s":[{"lit":"api"},{"lit":"monsters"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"moogle_api_web_features_monsters_search_monster_search_result","name__orig":"moogle_api_web_features_monsters_search_monster_search_result","Name":"MoogleApiWebFeaturesMonstersSearchMonsterSearchResult","name_":"moogle_api_web_features_monsters_search_monster_search_result","name-":"moogle-api-web-features-monsters-search-monster-search-result","NAME":"MOOGLE_API_WEB_FEATURES_MONSTERS_SEARCH_MONSTER_SEARCH_RESULT","index$":7}, {"active":true,"entity":"moogle_api_web_features_monsters_search_monster_search_result","key$":"BasicMoogleApiWebFeaturesMonstersSearchMonsterSearchResultFlow","kind":"basic","name":"BasicMoogleApiWebFeaturesMonstersSearchMonsterSearchResultFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"moogle_api_web_features_monsters_search_monster_search_result_ref01"}}],"index$":0}]}, 'MoogleApiWebFeaturesMonstersSearchMonsterSearchResult', {"GET /api/monsters/search":{"protocol":"http","operationId":"SearchMonsters","responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"properties":{"results":{"items":{"additionalProperties":false,"properties":{"category":{"nullable":true,"type":"string","key$":"category"},"description":{"nullable":true,"type":"string","key$":"description"},"gameName":{"type":"string","key$":"gameName"},"hitPoints":{"format":"int32","nullable":true,"type":"integer","key$":"hitPoints"},"id":{"format":"int32","type":"integer","key$":"id"},"name":{"type":"string","key$":"name"}},"type":"object","x-ref":"#/components/schemas/MoogleAPIWebFeaturesMonstersSearchMonsterSearchResult","index$":0},"key$":"results","type":"array"}},"x-ref":"#/components/schemas/MoogleAPIWebFeaturesMonstersSearchSearchMonstersResponse"}}}},"400":{"description":"Bad Request","content":{"application/problem+json":{"schema":{"type":"object","additionalProperties":false,"properties":{"type":{"type":"string","default":"https://www.rfc-editor.org/rfc/rfc7231#section-6.5.1"},"title":{"type":"string","default":"One or more validation errors occurred."},"status":{"type":"integer","format":"int32","default":400},"instance":{"type":"string","default":"/api/route"},"traceId":{"type":"string","default":"0HMPNHL0JHL76:00000001"},"detail":{"type":"string","nullable":true},"errors":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"name":{"type":"string","default":"Error or field name"},"reason":{"type":"string","default":"Error reason"},"code":{"type":"string","nullable":true},"severity":{"type":"string","nullable":true}},"x-ref":"#/components/schemas/FastEndpointsProblemDetails_Error"}}},"x-ref":"#/components/schemas/FastEndpointsProblemDetails"}}}}},"parameters":[{"name":"query","in":"query","required":true,"schema":{"type":"string"},"index$":0},{"name":"gameId","in":"query","schema":{"type":"integer","format":"int32","nullable":true},"index$":1},{"name":"category","in":"query","schema":{"type":"string","nullable":true},"index$":2}],"securitySource":"unspecified","securitySchemes":{"JWTBearerAuth":{"type":"http","description":"Enter a JWT token to authorize the requests...","scheme":"Bearer","bearerFormat":"JWT"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let moogle_api_web_features_monsters_search_monster_search_result_ref01_data = Object.values(setup.data.existing.moogle_api_web_features_monsters_search_monster_search_result)[0] as any

    // LIST
    const moogle_api_web_features_monsters_search_monster_search_result_ref01_ent = client.MoogleApiWebFeaturesMonstersSearchMonsterSearchResult()
    const moogle_api_web_features_monsters_search_monster_search_result_ref01_match: any = {}

    const moogle_api_web_features_monsters_search_monster_search_result_ref01_list = (await moogle_api_web_features_monsters_search_monster_search_result_ref01_ent.list(moogle_api_web_features_monsters_search_monster_search_result_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/moogle_api_web_features_monsters_search_monster_search_result/MoogleApiWebFeaturesMonstersSearchMonsterSearchResultTestData.json')

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
    ['moogle_api_web_features_monsters_search_monster_search_result01','moogle_api_web_features_monsters_search_monster_search_result02','moogle_api_web_features_monsters_search_monster_search_result03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_SEARCH_MONSTER_SEARCH_RESULT_ENTID': idmap,
    'MOOGLEAPI_TEST_LIVE': 'FALSE',
    'MOOGLEAPI_TEST_EXPLAIN': 'FALSE',
    'MOOGLEAPI_APIKEY': '',
  })

  idmap = env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_SEARCH_MONSTER_SEARCH_RESULT_ENTID']

  const live = 'TRUE' === env.MOOGLEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_MONSTERS_SEARCH_MONSTER_SEARCH_RESULT_ENTID']
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
  
