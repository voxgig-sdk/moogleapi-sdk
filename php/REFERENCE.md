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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity

```php
$moogle_api_web_features_characters_get_all_get_all_character = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `game_name` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersGetGetCharacterEntity

```php
$moogle_api_web_features_characters_get_get_character = $client->MoogleApiWebFeaturesCharactersGetGetCharacter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affiliation` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `game_name` | ``$STRING`` | No |  |
| `hometown` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `race` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->MoogleApiWebFeaturesCharactersGetGetCharacter()->load(["id" => "moogle_api_web_features_characters_get_get_character_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesCharactersGetGetCharacterEntity`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity

```php
$moogle_api_web_features_characters_search_search_character = $client->MoogleApiWebFeaturesCharactersSearchSearchCharacter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | ``$STRING`` | No |  |
| `game_name` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->MoogleApiWebFeaturesCharactersSearchSearchCharacter()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetAllGetAllGameEntity

```php
$moogle_api_web_features_games_get_all_get_all_game = $client->MoogleApiWebFeaturesGamesGetAllGetAllGame();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `platform` | ``$STRING`` | No |  |
| `release_year` | ``$INTEGER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->MoogleApiWebFeaturesGamesGetAllGetAllGame()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesGamesGetAllGetAllGameEntity`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetGetGameEntity

```php
$moogle_api_web_features_games_get_get_game = $client->MoogleApiWebFeaturesGamesGetGetGame();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `character_count` | ``$INTEGER`` | No |  |
| `description` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `monster_count` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `platform` | ``$STRING`` | No |  |
| `release_year` | ``$INTEGER`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->MoogleApiWebFeaturesGamesGetGetGame()->load(["id" => "moogle_api_web_features_games_get_get_game_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesGamesGetGetGameEntity`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity

```php
$moogle_api_web_features_monsters_get_all_get_all_monster = $client->MoogleApiWebFeaturesMonstersGetAllGetAllMonster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | ``$STRING`` | No |  |
| `game_name` | ``$STRING`` | No |  |
| `hit_point` | ``$INTEGER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->MoogleApiWebFeaturesMonstersGetAllGetAllMonster()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetGetMonsterEntity

```php
$moogle_api_web_features_monsters_get_get_monster = $client->MoogleApiWebFeaturesMonstersGetGetMonster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `game_name` | ``$STRING`` | No |  |
| `hit_point` | ``$INTEGER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->MoogleApiWebFeaturesMonstersGetGetMonster()->load(["id" => "moogle_api_web_features_monsters_get_get_monster_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesMonstersGetGetMonsterEntity`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity

```php
$moogle_api_web_features_monsters_search_search_monster = $client->MoogleApiWebFeaturesMonstersSearchSearchMonster();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `game_name` | ``$STRING`` | No |  |
| `hit_point` | ``$INTEGER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->MoogleApiWebFeaturesMonstersSearchSearchMonster()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance with the same client and
options.

#### `getName(): string`

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

