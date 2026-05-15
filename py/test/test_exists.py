# ProjectName SDK exists test

import pytest
from moogleapi_sdk import MoogleapiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MoogleapiSDK.test(None, None)
        assert testsdk is not None
