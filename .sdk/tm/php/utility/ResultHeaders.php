<?php
declare(strict_types=1);

// Moogleapi SDK utility: result_headers

class MoogleapiResultHeaders
{
    public static function call(MoogleapiContext $ctx): ?MoogleapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
