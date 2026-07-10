# Moogleapi PHP SDK Reference

Complete API reference for the Moogleapi PHP SDK.


## MoogleapiSDK

### Constructor

```php
require_once __DIR__ . '/moogleapi_sdk.php';

$client = new MoogleapiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MoogleapiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = MoogleapiSDK::test();
```


### Instance Methods

#### `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter($data = null)`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesCharactersGetGetCharacter($data = null)`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesCharactersSearchSearchCharacter($data = null)`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesGamesGetAllGetAllGame($data = null)`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesGamesGetGetGame($data = null)`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetAllGetAllMonster($data = null)`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetGetMonster($data = null)`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesMonstersSearchSearchMonster($data = null)`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): MoogleapiUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity

```php
$moogle_api_web_features_characters_get_all_get_all_character = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `game_name` | `string` | No |  |
| `id` | `int` | No |  |
| `image_url` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersGetGetCharacterEntity

```php
$moogle_api_web_features_characters_get_get_character = $client->MoogleApiWebFeaturesCharactersGetGetCharacter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affiliation` | `string` | No |  |
| `description` | `string` | No |  |
| `game_name` | `string` | No |  |
| `hometown` | `string` | No |  |
| `id` | `int` | No |  |
| `image_url` | `string` | No |  |
| `name` | `string` | No |  |
| `race` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MoogleApiWebFeaturesCharactersGetGetCharacter()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesCharactersGetGetCharacterEntity`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity

```php
$moogle_api_web_features_characters_search_search_character = $client->MoogleApiWebFeaturesCharactersSearchSearchCharacter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `game_name` | `string` | No |  |
| `id` | `int` | No |  |
| `image_url` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesCharactersSearchSearchCharacter()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetAllGetAllGameEntity

```php
$moogle_api_web_features_games_get_all_get_all_game = $client->MoogleApiWebFeaturesGamesGetAllGetAllGame();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `release_year` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesGamesGetAllGetAllGame()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesGamesGetAllGetAllGameEntity`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetGetGameEntity

```php
$moogle_api_web_features_games_get_get_game = $client->MoogleApiWebFeaturesGamesGetGetGame();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `character_count` | `int` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `monster_count` | `int` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `release_year` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MoogleApiWebFeaturesGamesGetGetGame()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesGamesGetGetGameEntity`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity

```php
$moogle_api_web_features_monsters_get_all_get_all_monster = $client->MoogleApiWebFeaturesMonstersGetAllGetAllMonster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `game_name` | `string` | No |  |
| `hit_point` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesMonstersGetAllGetAllMonster()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetGetMonsterEntity

```php
$moogle_api_web_features_monsters_get_get_monster = $client->MoogleApiWebFeaturesMonstersGetGetMonster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `game_name` | `string` | No |  |
| `hit_point` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MoogleApiWebFeaturesMonstersGetGetMonster()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesMonstersGetGetMonsterEntity`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity

```php
$moogle_api_web_features_monsters_search_search_monster = $client->MoogleApiWebFeaturesMonstersSearchSearchMonster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `game_name` | `string` | No |  |
| `hit_point` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesMonstersSearchSearchMonster()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new MoogleapiSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

