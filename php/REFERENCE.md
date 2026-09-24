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

#### `MoogleApiWebFeaturesCharactersGetAllCharacterSummary($data = null)`

Create a new `MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesCharactersGetGetCharacter($data = null)`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesCharactersSearchSearchResult($data = null)`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchResultEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesGamesGetAllGameSummary($data = null)`

Create a new `MoogleApiWebFeaturesGamesGetAllGameSummaryEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesGamesGetGetGame($data = null)`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetAllMonsterSummary($data = null)`

Create a new `MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetGetMonster($data = null)`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance. Pass `null` for no initial data.

#### `MoogleApiWebFeaturesMonstersSearchMonsterSearchResult($data = null)`

Create a new `MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity` instance. Pass `null` for no initial data.

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

## MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity

```php
$moogle_api_web_features_characters_get_all_character_summary = $client->MoogleApiWebFeaturesCharactersGetAllCharacterSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `gameName` | `string` | No |  |
| `id` | `int` | No |  |
| `imageUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesCharactersGetAllCharacterSummary()->list();
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

#### `make(): MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity`

Create a new `MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity` instance with the same client and
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
| `gameName` | `string` | No |  |
| `hometown` | `string` | No |  |
| `id` | `int` | No |  |
| `imageUrl` | `string` | No |  |
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

## MoogleApiWebFeaturesCharactersSearchSearchResultEntity

```php
$moogle_api_web_features_characters_search_search_result = $client->MoogleApiWebFeaturesCharactersSearchSearchResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `id` | `int` | No |  |
| `imageUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesCharactersSearchSearchResult()->list();
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

#### `make(): MoogleApiWebFeaturesCharactersSearchSearchResultEntity`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetAllGameSummaryEntity

```php
$moogle_api_web_features_games_get_all_game_summary = $client->MoogleApiWebFeaturesGamesGetAllGameSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `releaseYear` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesGamesGetAllGameSummary()->list();
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

#### `make(): MoogleApiWebFeaturesGamesGetAllGameSummaryEntity`

Create a new `MoogleApiWebFeaturesGamesGetAllGameSummaryEntity` instance with the same client and
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
| `characterCount` | `int` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `monsterCount` | `int` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `releaseYear` | `int` | No |  |

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

## MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity

```php
$moogle_api_web_features_monsters_get_all_monster_summary = $client->MoogleApiWebFeaturesMonstersGetAllMonsterSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `gameName` | `string` | No |  |
| `hitPoints` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesMonstersGetAllMonsterSummary()->list();
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

#### `make(): MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity`

Create a new `MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity` instance with the same client and
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
| `gameName` | `string` | No |  |
| `hitPoints` | `int` | No |  |
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

## MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity

```php
$moogle_api_web_features_monsters_search_monster_search_result = $client->MoogleApiWebFeaturesMonstersSearchMonsterSearchResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `hitPoints` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MoogleApiWebFeaturesMonstersSearchMonsterSearchResult()->list();
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

#### `make(): MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity`

Create a new `MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```php
$client = new MoogleapiSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

