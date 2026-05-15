# Moogleapi SDK utility: make_context
require_relative '../core/context'
module MoogleapiUtilities
  MakeContext = ->(ctxmap, basectx) {
    MoogleapiContext.new(ctxmap, basectx)
  }
end
