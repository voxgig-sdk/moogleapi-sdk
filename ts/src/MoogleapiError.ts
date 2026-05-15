
import { Context } from './Context'


class MoogleapiError extends Error {

  isMoogleapiError = true

  sdk = 'Moogleapi'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MoogleapiError
}

