
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MoogleapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MoogleapiSDK.test()
    equal(testsdk instanceof MoogleapiSDK, true,
      'MoogleapiSDK.test() must return a client synchronously')
  })

})
