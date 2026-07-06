# Moogleapi PHP SDK



The PHP SDK for the Moogleapi API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/moogleapi-sdk/releases](https://github.com/voxgig-sdk/moogleapi-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'moogleapi_sdk.php';

$client = new MoogleapiSDK([
    "apikey" => getenv("MOOGLEAPI_APIKEY"),
]);
```

### 2. List moogleapiwebfeaturescharactersgetallgetallcharacter records

```php
try {
    // list() returns an array of MoogleApiWebFeaturesCharactersGetAllGetAllCharacter records — iterate directly.
    $moogleapiwebfeaturescharactersgetallgetallcharacters = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()->list();
    foreach ($moogleapiwebfeaturescharactersgetallgetallcharacters as $item) {
        echo $item["id"] . " " . $item["game_name"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $moogleapiwebfeaturescharactersgetallgetallcharacters = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = MoogleapiSDK::test();

// Entity ops return the bare mock record (throws on error).
$moogleapiwebfeaturescharactersgetallgetallcharacter = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()->list();
print_r($moogleapiwebfeaturescharactersgetallgetallcharacter);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new MoogleapiSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
MOOGLEAPI_TEST_LIVE=TRUE
MOOGLEAPI_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### MoogleapiSDK

```php
require_once 'moogleapi_sdk.php';
$client = new MoogleapiSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = MoogleapiSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### MoogleapiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter` | `($data): MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` | Create a MoogleApiWebFeaturesCharactersGetAllGetAllCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersGetGetCharacter` | `($data): MoogleApiWebFeaturesCharactersGetGetCharacterEntity` | Create a MoogleApiWebFeaturesCharactersGetGetCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersSearchSearchCharacter` | `($data): MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` | Create a MoogleApiWebFeaturesCharactersSearchSearchCharacter entity instance. |
| `MoogleApiWebFeaturesGamesGetAllGetAllGame` | `($data): MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` | Create a MoogleApiWebFeaturesGamesGetAllGetAllGame entity instance. |
| `MoogleApiWebFeaturesGamesGetGetGame` | `($data): MoogleApiWebFeaturesGamesGetGetGameEntity` | Create a MoogleApiWebFeaturesGamesGetGetGame entity instance. |
| `MoogleApiWebFeaturesMonstersGetAllGetAllMonster` | `($data): MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` | Create a MoogleApiWebFeaturesMonstersGetAllGetAllMonster entity instance. |
| `MoogleApiWebFeaturesMonstersGetGetMonster` | `($data): MoogleApiWebFeaturesMonstersGetGetMonsterEntity` | Create a MoogleApiWebFeaturesMonstersGetGetMonster entity instance. |
| `MoogleApiWebFeaturesMonstersSearchSearchMonster` | `($data): MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` | Create a MoogleApiWebFeaturesMonstersSearchSearchMonster entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### MoogleApiWebFeaturesCharactersGetAllGetAllCharacter

| Field | Description |
| --- | --- |
| `game_name` |  |
| `id` |  |
| `image_url` |  |
| `name` |  |
| `role` |  |

Operations: List.

API path: `/api/characters`

#### MoogleApiWebFeaturesCharactersGetGetCharacter

| Field | Description |
| --- | --- |
| `affiliation` |  |
| `description` |  |
| `game_name` |  |
| `hometown` |  |
| `id` |  |
| `image_url` |  |
| `name` |  |
| `race` |  |
| `role` |  |

Operations: Load.

API path: `/api/characters/{id}`

#### MoogleApiWebFeaturesCharactersSearchSearchCharacter

| Field | Description |
| --- | --- |
| `description` |  |
| `game_name` |  |
| `id` |  |
| `image_url` |  |
| `name` |  |
| `role` |  |

Operations: List.

API path: `/api/characters/search`

#### MoogleApiWebFeaturesGamesGetAllGetAllGame

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `platform` |  |
| `release_year` |  |

Operations: List.

API path: `/api/games`

#### MoogleApiWebFeaturesGamesGetGetGame

| Field | Description |
| --- | --- |
| `character_count` |  |
| `description` |  |
| `id` |  |
| `monster_count` |  |
| `name` |  |
| `platform` |  |
| `release_year` |  |

Operations: Load.

API path: `/api/games/{id}`

#### MoogleApiWebFeaturesMonstersGetAllGetAllMonster

| Field | Description |
| --- | --- |
| `category` |  |
| `game_name` |  |
| `hit_point` |  |
| `id` |  |
| `name` |  |

Operations: List.

API path: `/api/monsters`

#### MoogleApiWebFeaturesMonstersGetGetMonster

| Field | Description |
| --- | --- |
| `category` |  |
| `description` |  |
| `game_name` |  |
| `hit_point` |  |
| `id` |  |
| `name` |  |

Operations: Load.

API path: `/api/monsters/{id}`

#### MoogleApiWebFeaturesMonstersSearchSearchMonster

| Field | Description |
| --- | --- |
| `category` |  |
| `description` |  |
| `game_name` |  |
| `hit_point` |  |
| `id` |  |
| `name` |  |

Operations: List.

API path: `/api/monsters/search`



## Entities


### MoogleApiWebFeaturesCharactersGetAllGetAllCharacter

Create an instance: `$moogle_api_web_features_characters_get_all_get_all_character = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `game_name` | `string` |  |
| `id` | `int` |  |
| `image_url` | `string` |  |
| `name` | `string` |  |
| `role` | `string` |  |

#### Example: List

```php
// list() returns an array of MoogleApiWebFeaturesCharactersGetAllGetAllCharacter records (throws on error).
$moogle_api_web_features_characters_get_all_get_all_characters = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()->list();
```


### MoogleApiWebFeaturesCharactersGetGetCharacter

Create an instance: `$moogle_api_web_features_characters_get_get_character = $client->MoogleApiWebFeaturesCharactersGetGetCharacter();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affiliation` | `string` |  |
| `description` | `string` |  |
| `game_name` | `string` |  |
| `hometown` | `string` |  |
| `id` | `int` |  |
| `image_url` | `string` |  |
| `name` | `string` |  |
| `race` | `string` |  |
| `role` | `string` |  |

#### Example: Load

```php
// load() returns the bare MoogleApiWebFeaturesCharactersGetGetCharacter record (throws on error).
$moogle_api_web_features_characters_get_get_character = $client->MoogleApiWebFeaturesCharactersGetGetCharacter()->load(["id" => "moogle_api_web_features_characters_get_get_character_id"]);
```


### MoogleApiWebFeaturesCharactersSearchSearchCharacter

Create an instance: `$moogle_api_web_features_characters_search_search_character = $client->MoogleApiWebFeaturesCharactersSearchSearchCharacter();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `game_name` | `string` |  |
| `id` | `int` |  |
| `image_url` | `string` |  |
| `name` | `string` |  |
| `role` | `string` |  |

#### Example: List

```php
// list() returns an array of MoogleApiWebFeaturesCharactersSearchSearchCharacter records (throws on error).
$moogle_api_web_features_characters_search_search_characters = $client->MoogleApiWebFeaturesCharactersSearchSearchCharacter()->list();
```


### MoogleApiWebFeaturesGamesGetAllGetAllGame

Create an instance: `$moogle_api_web_features_games_get_all_get_all_game = $client->MoogleApiWebFeaturesGamesGetAllGetAllGame();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `name` | `string` |  |
| `platform` | `string` |  |
| `release_year` | `int` |  |

#### Example: List

```php
// list() returns an array of MoogleApiWebFeaturesGamesGetAllGetAllGame records (throws on error).
$moogle_api_web_features_games_get_all_get_all_games = $client->MoogleApiWebFeaturesGamesGetAllGetAllGame()->list();
```


### MoogleApiWebFeaturesGamesGetGetGame

Create an instance: `$moogle_api_web_features_games_get_get_game = $client->MoogleApiWebFeaturesGamesGetGetGame();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `character_count` | `int` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `monster_count` | `int` |  |
| `name` | `string` |  |
| `platform` | `string` |  |
| `release_year` | `int` |  |

#### Example: Load

```php
// load() returns the bare MoogleApiWebFeaturesGamesGetGetGame record (throws on error).
$moogle_api_web_features_games_get_get_game = $client->MoogleApiWebFeaturesGamesGetGetGame()->load(["id" => "moogle_api_web_features_games_get_get_game_id"]);
```


### MoogleApiWebFeaturesMonstersGetAllGetAllMonster

Create an instance: `$moogle_api_web_features_monsters_get_all_get_all_monster = $client->MoogleApiWebFeaturesMonstersGetAllGetAllMonster();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `game_name` | `string` |  |
| `hit_point` | `int` |  |
| `id` | `int` |  |
| `name` | `string` |  |

#### Example: List

```php
// list() returns an array of MoogleApiWebFeaturesMonstersGetAllGetAllMonster records (throws on error).
$moogle_api_web_features_monsters_get_all_get_all_monsters = $client->MoogleApiWebFeaturesMonstersGetAllGetAllMonster()->list();
```


### MoogleApiWebFeaturesMonstersGetGetMonster

Create an instance: `$moogle_api_web_features_monsters_get_get_monster = $client->MoogleApiWebFeaturesMonstersGetGetMonster();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `description` | `string` |  |
| `game_name` | `string` |  |
| `hit_point` | `int` |  |
| `id` | `int` |  |
| `name` | `string` |  |

#### Example: Load

```php
// load() returns the bare MoogleApiWebFeaturesMonstersGetGetMonster record (throws on error).
$moogle_api_web_features_monsters_get_get_monster = $client->MoogleApiWebFeaturesMonstersGetGetMonster()->load(["id" => "moogle_api_web_features_monsters_get_get_monster_id"]);
```


### MoogleApiWebFeaturesMonstersSearchSearchMonster

Create an instance: `$moogle_api_web_features_monsters_search_search_monster = $client->MoogleApiWebFeaturesMonstersSearchSearchMonster();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `description` | `string` |  |
| `game_name` | `string` |  |
| `hit_point` | `int` |  |
| `id` | `int` |  |
| `name` | `string` |  |

#### Example: List

```php
// list() returns an array of MoogleApiWebFeaturesMonstersSearchSearchMonster records (throws on error).
$moogle_api_web_features_monsters_search_search_monsters = $client->MoogleApiWebFeaturesMonstersSearchSearchMonster()->list();
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── moogleapi_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`moogleapi_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$moogleapiwebfeaturescharactersgetallgetallcharacter = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter();
$moogleapiwebfeaturescharactersgetallgetallcharacter->list();

// $moogleapiwebfeaturescharactersgetallgetallcharacter->data_get() now returns the moogleapiwebfeaturescharactersgetallgetallcharacter data from the last list
// $moogleapiwebfeaturescharactersgetallgetallcharacter->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
