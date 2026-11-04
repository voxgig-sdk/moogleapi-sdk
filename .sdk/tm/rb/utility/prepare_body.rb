# Moogleapi SDK utility: prepare_body
require_relative 'media'
module MoogleapiUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return MoogleapiUtilities.raw_body(ctx.reqdata) if MoogleapiUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
