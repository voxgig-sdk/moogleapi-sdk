# Moogleapi Ruby SDK Reference

Complete API reference for the Moogleapi Ruby SDK.


## MoogleapiSDK

### Constructor

```ruby
require_relative 'moogleapi_sdk'

client = MoogleapiSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MoogleapiSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = MoogleapiSDK.test
```


### Instance Methods

#### `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(data = nil)`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesCharactersGetGetCharacter(data = nil)`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesCharactersSearchSearchCharacter(data = nil)`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesGamesGetAllGetAllGame(data = nil)`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGame` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesGamesGetGetGame(data = nil)`

Create a new `MoogleApiWebFeaturesGamesGetGetGame` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetAllGetAllMonster(data = nil)`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonster` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetGetMonster(data = nil)`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonster` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersSearchSearchMonster(data = nil)`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonster` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity

```ruby
moogle_api_web_features_characters_get_all_get_all_character = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersGetGetCharacterEntity

```ruby
moogle_api_web_features_characters_get_get_character = client.MoogleApiWebFeaturesCharactersGetGetCharacter
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MoogleApiWebFeaturesCharactersGetGetCharacter.load({ "id" => "moogle_api_web_features_characters_get_get_character_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity

```ruby
moogle_api_web_features_characters_search_search_character = client.MoogleApiWebFeaturesCharactersSearchSearchCharacter
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.MoogleApiWebFeaturesCharactersSearchSearchCharacter.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetAllGetAllGameEntity

```ruby
moogle_api_web_features_games_get_all_get_all_game = client.MoogleApiWebFeaturesGamesGetAllGetAllGame
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `platform` | ``$STRING`` | No |  |
| `release_year` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.MoogleApiWebFeaturesGamesGetAllGetAllGame.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetGetGameEntity

```ruby
moogle_api_web_features_games_get_get_game = client.MoogleApiWebFeaturesGamesGetGetGame
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MoogleApiWebFeaturesGamesGetGetGame.load({ "id" => "moogle_api_web_features_games_get_get_game_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity

```ruby
moogle_api_web_features_monsters_get_all_get_all_monster = client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetGetMonsterEntity

```ruby
moogle_api_web_features_monsters_get_get_monster = client.MoogleApiWebFeaturesMonstersGetGetMonster
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MoogleApiWebFeaturesMonstersGetGetMonster.load({ "id" => "moogle_api_web_features_monsters_get_get_monster_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity

```ruby
moogle_api_web_features_monsters_search_search_monster = client.MoogleApiWebFeaturesMonstersSearchSearchMonster
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.MoogleApiWebFeaturesMonstersSearchSearchMonster.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = MoogleapiSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

