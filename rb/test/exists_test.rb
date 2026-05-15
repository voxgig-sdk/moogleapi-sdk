# Moogleapi SDK exists test

require "minitest/autorun"
require_relative "../Moogleapi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MoogleapiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
