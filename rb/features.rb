# Moogleapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MoogleapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      MoogleapiBaseFeature.new
    when "test"
      MoogleapiTestFeature.new
    else
      MoogleapiBaseFeature.new
    end
  end
end
