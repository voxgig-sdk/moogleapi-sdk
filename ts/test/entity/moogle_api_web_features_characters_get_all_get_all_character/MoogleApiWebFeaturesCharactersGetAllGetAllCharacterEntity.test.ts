

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MOOGLEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MOOGLEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MoogleapiSDK.test()
    const ent = testsdk.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MOOGLEAPI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'moogle_api_web_features_characters_get_all_get_all_character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"gameName","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":1},{"active":true,"name":"imageUrl","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"role","req":false,"type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"moogle_api_web_features_characters_get_all_get_all_character","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"game_id","orig":"game_id","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":20,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/characters","json":"{\"operationId\":\"GetAllCharacters\",\"parameters\":[{\"in\":\"query\",\"name\":\"gameId\",\"schema\":{\"format\":\"int32\",\"nullable\":true,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"format\":\"int32\",\"nullable\":false,\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"pageSize\",\"schema\":{\"default\":20,\"format\":\"int32\",\"nullable\":false,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"items\":{\"items\":{\"additionalProperties\":false,\"properties\":{\"gameName\":{\"type\":\"string\"},\"id\":{\"format\":\"int32\",\"type\":\"integer\"},\"imageUrl\":{\"nullable\":true,\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"role\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"format\":\"int32\",\"type\":\"integer\"},\"pageSize\":{\"format\":\"int32\",\"type\":\"integer\"},\"totalCount\":{\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"securitySchemes\":{\"JWTBearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"Enter a JWT token to authorize the requests...\",\"scheme\":\"Bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/characters","segments":[{"lit":"api"},{"lit":"characters"}],"select":{"exist":["game_id","page","page_size"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"moogle_api_web_features_characters_get_all_get_all_character","name__orig":"moogle_api_web_features_characters_get_all_get_all_character","Name":"MoogleApiWebFeaturesCharactersGetAllGetAllCharacter","name_":"moogle_api_web_features_characters_get_all_get_all_character","name-":"moogle-api-web-features-characters-get-all-get-all-character","NAME":"MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_ALL_GET_ALL_CHARACTER","index$":0}, {"active":true,"entity":"moogle_api_web_features_characters_get_all_get_all_character","key$":"BasicMoogleApiWebFeaturesCharactersGetAllGetAllCharacterFlow","kind":"basic","name":"BasicMoogleApiWebFeaturesCharactersGetAllGetAllCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"moogle_api_web_features_characters_get_all_get_all_character_ref01"}}],"index$":0}]}, 'MoogleApiWebFeaturesCharactersGetAllGetAllCharacter')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let moogle_api_web_features_characters_get_all_get_all_character_ref01_data = Object.values(setup.data.existing.moogle_api_web_features_characters_get_all_get_all_character)[0] as any

    // LIST
    const moogle_api_web_features_characters_get_all_get_all_character_ref01_ent = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()
    const moogle_api_web_features_characters_get_all_get_all_character_ref01_match: any = {}

    const moogle_api_web_features_characters_get_all_get_all_character_ref01_list = (await moogle_api_web_features_characters_get_all_get_all_character_ref01_ent.list(moogle_api_web_features_characters_get_all_get_all_character_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/moogle_api_web_features_characters_get_all_get_all_character/MoogleApiWebFeaturesCharactersGetAllGetAllCharacterTestData.json')

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
    ['moogle_api_web_features_characters_get_all_get_all_character01','moogle_api_web_features_characters_get_all_get_all_character02','moogle_api_web_features_characters_get_all_get_all_character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_ALL_GET_ALL_CHARACTER_ENTID': idmap,
    'MOOGLEAPI_TEST_LIVE': 'FALSE',
    'MOOGLEAPI_TEST_EXPLAIN': 'FALSE',
    'MOOGLEAPI_APIKEY': '',
  })

  idmap = env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_ALL_GET_ALL_CHARACTER_ENTID']

  const live = 'TRUE' === env.MOOGLEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_ALL_GET_ALL_CHARACTER_ENTID']
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
  
