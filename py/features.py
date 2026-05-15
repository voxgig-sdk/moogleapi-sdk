# Moogleapi SDK feature factory

from feature.base_feature import MoogleapiBaseFeature
from feature.test_feature import MoogleapiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MoogleapiBaseFeature(),
        "test": lambda: MoogleapiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
