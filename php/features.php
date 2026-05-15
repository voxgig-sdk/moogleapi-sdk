<?php
declare(strict_types=1);

// Moogleapi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MoogleapiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MoogleapiBaseFeature();
            case "test":
                return new MoogleapiTestFeature();
            default:
                return new MoogleapiBaseFeature();
        }
    }
}
