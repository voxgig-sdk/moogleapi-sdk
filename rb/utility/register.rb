# Moogleapi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MoogleapiUtility.registrar = ->(u) {
  u.clean = MoogleapiUtilities::Clean
  u.done = MoogleapiUtilities::Done
  u.make_error = MoogleapiUtilities::MakeError
  u.feature_add = MoogleapiUtilities::FeatureAdd
  u.feature_hook = MoogleapiUtilities::FeatureHook
  u.feature_init = MoogleapiUtilities::FeatureInit
  u.fetcher = MoogleapiUtilities::Fetcher
  u.make_fetch_def = MoogleapiUtilities::MakeFetchDef
  u.make_context = MoogleapiUtilities::MakeContext
  u.make_options = MoogleapiUtilities::MakeOptions
  u.make_request = MoogleapiUtilities::MakeRequest
  u.make_response = MoogleapiUtilities::MakeResponse
  u.make_result = MoogleapiUtilities::MakeResult
  u.make_point = MoogleapiUtilities::MakePoint
  u.make_spec = MoogleapiUtilities::MakeSpec
  u.make_url = MoogleapiUtilities::MakeUrl
  u.param = MoogleapiUtilities::Param
  u.prepare_auth = MoogleapiUtilities::PrepareAuth
  u.prepare_body = MoogleapiUtilities::PrepareBody
  u.prepare_headers = MoogleapiUtilities::PrepareHeaders
  u.prepare_method = MoogleapiUtilities::PrepareMethod
  u.prepare_params = MoogleapiUtilities::PrepareParams
  u.prepare_path = MoogleapiUtilities::PreparePath
  u.prepare_query = MoogleapiUtilities::PrepareQuery
  u.result_basic = MoogleapiUtilities::ResultBasic
  u.result_body = MoogleapiUtilities::ResultBody
  u.result_headers = MoogleapiUtilities::ResultHeaders
  u.transform_request = MoogleapiUtilities::TransformRequest
  u.transform_response = MoogleapiUtilities::TransformResponse
}
