-- Moogleapi SDK error

local MoogleapiError = {}
MoogleapiError.__index = MoogleapiError


function MoogleapiError.new(code, msg, ctx)
  local self = setmetatable({}, MoogleapiError)
  self.is_sdk_error = true
  self.sdk = "Moogleapi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MoogleapiError:error()
  return self.msg
end


function MoogleapiError:__tostring()
  return self.msg
end


return MoogleapiError
