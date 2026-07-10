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

#### `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(data)`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesCharactersGetGetCharacter(data)`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesCharactersSearchSearchCharacter(data)`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesGamesGetAllGetAllGame(data)`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGame` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesGamesGetGetGame(data)`

Create a new `MoogleApiWebFeaturesGamesGetGetGame` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetAllGetAllMonster(data)`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonster` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetGetMonster(data)`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonster` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersSearchSearchMonster(data)`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonster` entity instance. Pass `nil` for no initial data.

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

## MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity

```lua
local moogle_api_web_features_characters_get_all_get_all_character = client:MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `game_name` | `string` | No |  |
| `id` | `number` | No |  |
| `image_url` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesCharactersGetAllGetAllCharacter():list()
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

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


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
| `game_name` | `string` | No |  |
| `hometown` | `string` | No |  |
| `id` | `number` | No |  |
| `image_url` | `string` | No |  |
| `name` | `string` | No |  |
| `race` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

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

## MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity

```lua
local moogle_api_web_features_characters_search_search_character = client:MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `game_name` | `string` | No |  |
| `id` | `number` | No |  |
| `image_url` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesCharactersSearchSearchCharacter():list()
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

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetAllGetAllGameEntity

```lua
local moogle_api_web_features_games_get_all_get_all_game = client:MoogleApiWebFeaturesGamesGetAllGetAllGame(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `release_year` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesGamesGetAllGetAllGame():list()
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

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance with the same client and
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
| `character_count` | `number` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `monster_count` | `number` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `release_year` | `number` | No |  |

### Operations

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

## MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity

```lua
local moogle_api_web_features_monsters_get_all_get_all_monster = client:MoogleApiWebFeaturesMonstersGetAllGetAllMonster(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `game_name` | `string` | No |  |
| `hit_point` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesMonstersGetAllGetAllMonster():list()
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

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance with the same client and
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
| `game_name` | `string` | No |  |
| `hit_point` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

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

## MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity

```lua
local moogle_api_web_features_monsters_search_search_monster = client:MoogleApiWebFeaturesMonstersSearchSearchMonster(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `game_name` | `string` | No |  |
| `hit_point` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MoogleApiWebFeaturesMonstersSearchSearchMonster():list()
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

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

