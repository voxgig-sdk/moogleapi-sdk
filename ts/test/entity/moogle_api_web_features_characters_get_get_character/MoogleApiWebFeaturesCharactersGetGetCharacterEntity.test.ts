

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


describe('MoogleApiWebFeaturesCharactersGetGetCharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MOOGLEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('MOOGLEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MoogleapiSDK.test()
    const ent = testsdk.MoogleApiWebFeaturesCharactersGetGetCharacter()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MOOGLEAPI_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'moogle_api_web_features_characters_get_get_character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"affiliation","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"gameName","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"hometown","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"imageUrl","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"race","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"role","req":false,"type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"moogle_api_web_features_characters_get_get_character","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/characters/{id}","json":"{\"operationId\":\"GetCharacter\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"affiliation\":{\"nullable\":true,\"type\":\"string\"},\"description\":{\"nullable\":true,\"type\":\"string\"},\"gameName\":{\"type\":\"string\"},\"hometown\":{\"nullable\":true,\"type\":\"string\"},\"id\":{\"format\":\"int32\",\"type\":\"integer\"},\"imageUrl\":{\"nullable\":true,\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"race\":{\"nullable\":true,\"type\":\"string\"},\"role\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"securitySchemes\":{\"JWTBearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"Enter a JWT token to authorize the requests...\",\"scheme\":\"Bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/characters/{id}","segments":[{"lit":"api"},{"lit":"characters"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"moogle_api_web_features_characters_get_get_character","name__orig":"moogle_api_web_features_characters_get_get_character","Name":"MoogleApiWebFeaturesCharactersGetGetCharacter","name_":"moogle_api_web_features_characters_get_get_character","name-":"moogle-api-web-features-characters-get-get-character","NAME":"MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER","index$":1}, {"active":true,"entity":"moogle_api_web_features_characters_get_get_character","key$":"BasicMoogleApiWebFeaturesCharactersGetGetCharacterFlow","kind":"basic","name":"BasicMoogleApiWebFeaturesCharactersGetGetCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"moogle_api_web_features_characters_get_get_character_ref01","srcdatavar":"moogle_api_web_features_characters_get_get_character_ref01_data","suffix":"_dt0"},"match":{"id":"moogle_api_web_features_characters_get_get_character01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-moogle_api_web_features_characters_get_get_character_ref01"}}],"index$":0}]}, 'MoogleApiWebFeaturesCharactersGetGetCharacter')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let moogle_api_web_features_characters_get_get_character_ref01_data = Object.values(setup.data.existing.moogle_api_web_features_characters_get_get_character)[0] as any

    // LOAD
    const moogle_api_web_features_characters_get_get_character_ref01_ent = client.MoogleApiWebFeaturesCharactersGetGetCharacter()
    const moogle_api_web_features_characters_get_get_character_ref01_match_dt0: any = {}
    moogle_api_web_features_characters_get_get_character_ref01_match_dt0.id = moogle_api_web_features_characters_get_get_character_ref01_data.id
    const moogle_api_web_features_characters_get_get_character_ref01_data_dt0 = (await moogle_api_web_features_characters_get_get_character_ref01_ent.load(moogle_api_web_features_characters_get_get_character_ref01_match_dt0)).data()
    assert(moogle_api_web_features_characters_get_get_character_ref01_data_dt0.id === moogle_api_web_features_characters_get_get_character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/moogle_api_web_features_characters_get_get_character/MoogleApiWebFeaturesCharactersGetGetCharacterTestData.json')

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
    ['moogle_api_web_features_characters_get_get_character01','moogle_api_web_features_characters_get_get_character02','moogle_api_web_features_characters_get_get_character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER_ENTID': idmap,
    'MOOGLEAPI_TEST_LIVE': 'FALSE',
    'MOOGLEAPI_TEST_EXPLAIN': 'FALSE',
    'MOOGLEAPI_APIKEY': '',
  })

  idmap = env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER_ENTID']

  const live = 'TRUE' === env.MOOGLEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MOOGLEAPI_TEST_MOOGLE_API_WEB_FEATURES_CHARACTERS_GET_GET_CHARACTER_ENTID']
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
  
