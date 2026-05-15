<?php
declare(strict_types=1);

// Moogleapi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MoogleapiMakeContext
{
    public static function call(array $ctxmap, ?MoogleapiContext $basectx): MoogleapiContext
    {
        return new MoogleapiContext($ctxmap, $basectx);
    }
}
