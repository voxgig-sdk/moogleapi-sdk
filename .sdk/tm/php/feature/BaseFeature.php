<?php
declare(strict_types=1);

// Moogleapi SDK base feature

class MoogleapiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MoogleapiContext $ctx, array $options): void {}
    public function PostConstruct(MoogleapiContext $ctx): void {}
    public function PostConstructEntity(MoogleapiContext $ctx): void {}
    public function SetData(MoogleapiContext $ctx): void {}
    public function GetData(MoogleapiContext $ctx): void {}
    public function GetMatch(MoogleapiContext $ctx): void {}
    public function SetMatch(MoogleapiContext $ctx): void {}
    public function PrePoint(MoogleapiContext $ctx): void {}
    public function PreSpec(MoogleapiContext $ctx): void {}
    public function PreRequest(MoogleapiContext $ctx): void {}
    public function PreResponse(MoogleapiContext $ctx): void {}
    public function PreResult(MoogleapiContext $ctx): void {}
    public function PreDone(MoogleapiContext $ctx): void {}
    public function PreUnexpected(MoogleapiContext $ctx): void {}
}
