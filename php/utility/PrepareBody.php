<?php
declare(strict_types=1);

// Moogleapi SDK utility: prepare_body

class MoogleapiPrepareBody
{
    public static function call(MoogleapiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
