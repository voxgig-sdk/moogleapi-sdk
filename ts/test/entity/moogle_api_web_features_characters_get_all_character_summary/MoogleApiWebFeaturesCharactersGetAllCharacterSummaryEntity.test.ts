

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


describe('MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MOOGLEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MOOGLEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MoogleapiSDK.test()
    const ent = testsdk.MoogleApiWebFeaturesCharactersGetAllCharacterSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MOOGLEAPI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'moogle_api_web_features_characters_get_all_character_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"gameName":{"a":true,"h":"Game Name","n":"gameName","r":false,"t":"`$STRING`","key$":"gameName","index$":0},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":1},"imageUrl":{"a":true,"h":"Image Url","n":"imageUrl","r":false,"t":"`$STRING`","key$":"imageUrl","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":3},"role":{"a":true,"h":"Role","n":"role","r":false,"t":"`$STRING`","key$":"role","index$":4}},"id":{"field":"id","name":"id"},"name":"moogle_api_web_features_characters_get_all_character_summary","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/characters","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"game_id","or":"game_id","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/characters","q":{"exist":["game_id","page","page_size"]},"r":{},"s":[{"lit":"api"},{"lit":"characters"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"moogle_api_web_features_characters_get_all_character_summary","name__orig":"moogle_api_web_features_characters_get_all_character_summary","Name":"MoogleApiWebFeaturesCharactersGetAllCharacterSummary","name_":"moogle_api_web_features_characters_get_all_character_summary","name-":"moogle-api-web-features-characters-get-all-character-summary","NAME":"MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_ALL_CHARACTER_SUMMARY","index$":0}, {"active":true,"entity":"moogle_api_web_features_characters_get_all_character_summary","key$":"BasicMoogleApiWebFeaturesCharactersGetAllCharacterSummaryFlow","kind":"basic","name":"BasicMoogleApiWebFeaturesCharactersGetAllCharacterSummaryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"moogle_api_web_features_characters_get_all_character_summary_ref01"}}],"index$":0}]}, 'MoogleApiWebFeaturesCharactersGetAllCharacterSummary', {"GET /api/characters":{"protocol":"http","operationId":"GetAllCharacters","responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"properties":{"items":{"items":{"additionalProperties":false,"properties":{"gameName":{"type":"string","key$":"gameName"},"id":{"format":"int32","type":"integer","key$":"id"},"imageUrl":{"nullable":true,"type":"string","key$":"imageUrl"},"name":{"type":"string","key$":"name"},"role":{"nullable":true,"type":"string","key$":"role"}},"type":"object","x-ref":"#/components/schemas/MoogleAPIWebFeaturesCharactersGetAllCharacterSummary","index$":0},"key$":"items","type":"array"},"totalCount":{"format":"int32","key$":"totalCount","type":"integer"},"page":{"format":"int32","key$":"page","type":"integer"},"pageSize":{"format":"int32","key$":"pageSize","type":"integer"}},"x-ref":"#/components/schemas/MoogleAPIWebFeaturesCharactersGetAllGetAllCharactersResponse"}}}}},"parameters":[{"name":"gameId","in":"query","schema":{"type":"integer","format":"int32","nullable":true},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1,"nullable":false},"index$":1},{"name":"pageSize","in":"query","schema":{"type":"integer","format":"int32","default":20,"nullable":false},"index$":2}],"securitySource":"unspecified","securitySchemes":{"JWTBearerAuth":{"type":"http","description":"Enter a JWT token to authorize the requests...","scheme":"Bearer","bearerFormat":"JWT"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let moogle_api_web_features_characters_get_all_character_summary_ref01_data = Object.values(setup.data.existing.moogle_api_web_features_characters_get_all_character_summary)[0] as any

    // LIST
    const moogle_api_web_features_characters_get_all_character_summary_ref01_ent = client.MoogleApiWebFeaturesCharactersGetAllCharacterSummary()
    const moogle_api_web_features_characters_get_all_character_summary_ref01_match: any = {}

    const moogle_api_web_features_characters_get_all_character_summary_ref01_list = (await moogle_api_web_features_characters_get_all_character_summary_ref01_ent.list(moogle_api_web_features_characters_get_all_character_summary_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/moogle_api_web_features_characters_get_all_character_summary/MoogleApiWebFeaturesCharactersGetAllCharacterSummaryTestData.json')

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
    ['moogle_api_web_features_characters_get_all_character_summary01','moogle_api_web_features_characters_get_all_character_summary02','moogle_api_web_features_characters_get_all_character_summary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_ALL_CHARACTER_SUMMARY_ENTID': idmap,
    'MOOGLEAPI_TEST_LIVE': 'FALSE',
    'MOOGLEAPI_TEST_EXPLAIN': 'FALSE',
    'MOOGLEAPI_APIKEY': '',
  })

  idmap = env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_ALL_CHARACTER_SUMMARY_ENTID']

  const live = 'TRUE' === env.MOOGLEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_ALL_CHARACTER_SUMMARY_ENTID']
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
  
