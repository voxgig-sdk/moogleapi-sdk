# Moogleapi SDK utility: feature_add
module MoogleapiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
