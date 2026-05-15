# Moogleapi SDK utility: make_request
require_relative '../core/response'
require_relative '../core/result'
module MoogleapiUtilities
  MakeRequest = ->(ctx) {
    return ctx.out["request"], nil if ctx.out["request"]

    spec = ctx.spec
    utility = ctx.utility
    response = MoogleapiResponse.new({})
    result = MoogleapiResult.new({})
    ctx.result = result

    return nil, ctx.make_error("request_no_spec", "Expected context spec property to be defined.") unless spec

    fetchdef, err = utility.make_fetch_def.call(ctx)
    if err
      response.err = err
      ctx.response = response
      spec.step = "postrequest"
      return response, nil
    end

    ctx.ctrl.explain["fetchdef"] = fetchdef if ctx.ctrl.explain

    spec.step = "prerequest"
    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    if fetch_err
      response.err = fetch_err
    elsif fetched.nil?
      response = MoogleapiResponse.new({ "err" => ctx.make_error("request_no_response", "response: undefined") })
    elsif fetched.is_a?(Hash)
      response = MoogleapiResponse.new(fetched)
    else
      response.err = ctx.make_error("request_invalid_response", "response: invalid type")
    end

    spec.step = "postrequest"
    ctx.response = response
    return response, nil
  }
end
