# Moogleapi SDK feature factory

from moogleapi_sdk.feature.base_feature import MoogleapiBaseFeature
from moogleapi_sdk.feature.ratelimit_feature import MoogleapiRatelimitFeature
from moogleapi_sdk.feature.retry_feature import MoogleapiRetryFeature
from moogleapi_sdk.feature.test_feature import MoogleapiTestFeature
from moogleapi_sdk.feature.timeout_feature import MoogleapiTimeoutFeature


_FEATURES = {
    "base": lambda: MoogleapiBaseFeature(),
    "ratelimit": lambda: MoogleapiRatelimitFeature(),
    "retry": lambda: MoogleapiRetryFeature(),
    "test": lambda: MoogleapiTestFeature(),
    "timeout": lambda: MoogleapiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
