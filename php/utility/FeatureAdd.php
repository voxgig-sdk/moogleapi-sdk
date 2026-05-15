<?php
declare(strict_types=1);

// Moogleapi SDK utility: feature_add

class MoogleapiFeatureAdd
{
    public static function call(MoogleapiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
