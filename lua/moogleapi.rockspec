package = "voxgig-sdk-moogleapi"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/moogleapi-sdk.git"
}
description = {
  summary = "Moogleapi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["moogleapi_sdk"] = "moogleapi_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
