

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


describe('MoogleApiWebFeaturesCharactersSearchSearchResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MOOGLEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MOOGLEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MoogleapiSDK.test()
    const ent = testsdk.MoogleApiWebFeaturesCharactersSearchSearchResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MOOGLEAPI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'moogle_api_web_features_characters_search_search_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"gameName":{"a":true,"h":"Game Name","n":"gameName","r":false,"t":"`$STRING`","key$":"gameName","index$":1},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":2},"imageUrl":{"a":true,"h":"Image Url","n":"imageUrl","r":false,"t":"`$STRING`","key$":"imageUrl","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":4},"role":{"a":true,"h":"Role","n":"role","r":false,"t":"`$STRING`","key$":"role","index$":5}},"id":{"field":"id","name":"id"},"name":"moogle_api_web_features_characters_search_search_result","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/characters/search","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"game_id","or":"gameId","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/characters/search","q":{"exist":["game_id","query"]},"r":{},"s":[{"lit":"api"},{"lit":"characters"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"moogle_api_web_features_characters_search_search_result","name__orig":"moogle_api_web_features_characters_search_search_result","Name":"MoogleApiWebFeaturesCharactersSearchSearchResult","name_":"moogle_api_web_features_characters_search_search_result","name-":"moogle-api-web-features-characters-search-search-result","NAME":"MOOGLE_API_WEB_FEATURES_CHARACTERS_SEARCH_SEARCH_RESULT","index$":1}, {"active":true,"entity":"moogle_api_web_features_characters_search_search_result","key$":"BasicMoogleApiWebFeaturesCharactersSearchSearchResultFlow","kind":"basic","name":"BasicMoogleApiWebFeaturesCharactersSearchSearchResultFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"moogle_api_web_features_characters_search_search_result_ref01"}}],"index$":0}]}, 'MoogleApiWebFeaturesCharactersSearchSearchResult', {"GET /api/characters/search":{"protocol":"http","parameters":[{"name":"query","in":"query","required":true,"schema":{"type":"string"},"index$":0},{"name":"gameId","in":"query","schema":{"type":"integer","format":"int32","nullable":true},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let moogle_api_web_features_characters_search_search_result_ref01_data = Object.values(setup.data.existing.moogle_api_web_features_characters_search_search_result)[0] as any

    // LIST
    const moogle_api_web_features_characters_search_search_result_ref01_ent = client.MoogleApiWebFeaturesCharactersSearchSearchResult()
    const moogle_api_web_features_characters_search_search_result_ref01_match: any = {}

    const moogle_api_web_features_characters_search_search_result_ref01_list = (await moogle_api_web_features_characters_search_search_result_ref01_ent.list(moogle_api_web_features_characters_search_search_result_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/moogle_api_web_features_characters_search_search_result/MoogleApiWebFeaturesCharactersSearchSearchResultTestData.json')

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
    ['moogle_api_web_features_characters_search_search_result01','moogle_api_web_features_characters_search_search_result02','moogle_api_web_features_characters_search_search_result03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_SEARCH_SEARCH_RESULT_ENTID': idmap,
    'MOOGLEAPI_TEST_LIVE': 'FALSE',
    'MOOGLEAPI_TEST_EXPLAIN': 'FALSE',
    'MOOGLEAPI_APIKEY': '',
  })

  idmap = env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_SEARCH_SEARCH_RESULT_ENTID']

  const live = 'TRUE' === env.MOOGLEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_SEARCH_SEARCH_RESULT_ENTID']
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
  
