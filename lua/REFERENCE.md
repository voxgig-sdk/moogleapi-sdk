# Moogleapi Lua SDK Reference

Complete API reference for the Moogleapi Lua SDK.


## MoogleapiSDK

### Constructor

```lua
local sdk = require("moogleapi_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `MoogleApiWebFeaturesCharactersGetGetCharacter(data)`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesCharactersSearchSearchResult(data)`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchResult` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesGamesGetGetGame(data)`

Create a new `MoogleApiWebFeaturesGamesGetGetGame` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetGetMonster(data)`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonster` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersSearchMonsterSearchResult(data)`

Create a new `MoogleApiWebFeaturesMonstersSearchMonsterSearchResult` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## MoogleApiWebFeaturesCharactersGetGetCharacterEntity

```lua
local moogle_api_web_features_characters_get_get_character = client:MoogleApiWebFeaturesCharactersGetGetCharacter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affiliation` | `string` | No |  |
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `hometown` | `string` | No |  |
| `id` | `number` | No |  |
| `imageUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `race` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesCharactersGetGetCharacter():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MoogleApiWebFeaturesCharactersGetGetCharacter():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersSearchSearchResultEntity

```lua
local moogle_api_web_features_characters_search_search_result = client:MoogleApiWebFeaturesCharactersSearchSearchResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `id` | `number` | No |  |
| `imageUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesCharactersSearchSearchResult():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetGetGameEntity

```lua
local moogle_api_web_features_games_get_get_game = client:MoogleApiWebFeaturesGamesGetGetGame(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `characterCount` | `number` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `monsterCount` | `number` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `releaseYear` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesGamesGetGetGame():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MoogleApiWebFeaturesGamesGetGetGame():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetGetMonsterEntity

```lua
local moogle_api_web_features_monsters_get_get_monster = client:MoogleApiWebFeaturesMonstersGetGetMonster(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `hitPoints` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesMonstersGetGetMonster():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MoogleApiWebFeaturesMonstersGetGetMonster():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity

```lua
local moogle_api_web_features_monsters_search_monster_search_result = client:MoogleApiWebFeaturesMonstersSearchMonsterSearchResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `hitPoints` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesMonstersSearchMonsterSearchResult():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
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

Rate limiting.

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

Retry.

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

Test transport.

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

Timeout.

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

