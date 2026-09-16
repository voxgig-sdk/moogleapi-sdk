# Moogleapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MoogleapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      MoogleapiBaseFeature.new
    when "ratelimit"
      MoogleapiRatelimitFeature.new
    when "retry"
      MoogleapiRetryFeature.new
    when "test"
      MoogleapiTestFeature.new
    when "timeout"
      MoogleapiTimeoutFeature.new
    else
      MoogleapiBaseFeature.new
    end
  end
end
