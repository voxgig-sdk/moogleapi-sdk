<?php
declare(strict_types=1);

// Moogleapi SDK utility: result_body

class MoogleapiResultBody
{
    public static function call(MoogleapiContext $ctx): ?MoogleapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
