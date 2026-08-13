# Moogleapi SDK utility: make_context

from projectname_sdk.core.context import MoogleapiContext


def make_context_util(ctxmap, basectx):
    return MoogleapiContext(ctxmap, basectx)
