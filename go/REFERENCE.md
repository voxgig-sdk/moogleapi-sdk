# Moogleapi Golang SDK Reference

Complete API reference for the Moogleapi Golang SDK.


## MoogleapiSDK

### Constructor

```go
func NewMoogleapiSDK(options map[string]any) *MoogleapiSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *MoogleapiSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *MoogleapiSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(data map[string]any) MoogleapiEntity`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesCharactersGetGetCharacter(data map[string]any) MoogleapiEntity`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesCharactersSearchSearchCharacter(data map[string]any) MoogleapiEntity`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacter` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesGamesGetAllGetAllGame(data map[string]any) MoogleapiEntity`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGame` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesGamesGetGetGame(data map[string]any) MoogleapiEntity`

Create a new `MoogleApiWebFeaturesGamesGetGetGame` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetAllGetAllMonster(data map[string]any) MoogleapiEntity`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonster` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetGetMonster(data map[string]any) MoogleapiEntity`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonster` entity instance. Pass `nil` for no initial data.

#### `MoogleApiWebFeaturesMonstersSearchSearchMonster(data map[string]any) MoogleapiEntity`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonster` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity

```go
moogleApiWebFeaturesCharactersGetAllGetAllCharacter := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil)
fmt.Println(moogleApiWebFeaturesCharactersGetAllGetAllCharacter.GetName()) // "moogle_api_web_features_characters_get_all_get_all_character"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersGetGetCharacterEntity

```go
moogleApiWebFeaturesCharactersGetGetCharacter := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil)
fmt.Println(moogleApiWebFeaturesCharactersGetGetCharacter.GetName()) // "moogle_api_web_features_characters_get_get_character"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity

```go
moogleApiWebFeaturesCharactersSearchSearchCharacter := client.MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil)
fmt.Println(moogleApiWebFeaturesCharactersSearchSearchCharacter.GetName()) // "moogle_api_web_features_characters_search_search_character"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetAllGetAllGameEntity

```go
moogleApiWebFeaturesGamesGetAllGetAllGame := client.MoogleApiWebFeaturesGamesGetAllGetAllGame(nil)
fmt.Println(moogleApiWebFeaturesGamesGetAllGetAllGame.GetName()) // "moogle_api_web_features_games_get_all_get_all_game"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `release_year` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MoogleApiWebFeaturesGamesGetAllGetAllGame(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetGetGameEntity

```go
moogleApiWebFeaturesGamesGetGetGame := client.MoogleApiWebFeaturesGamesGetGetGame(nil)
fmt.Println(moogleApiWebFeaturesGamesGetGetGame.GetName()) // "moogle_api_web_features_games_get_get_game"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MoogleApiWebFeaturesGamesGetGetGame(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity

```go
moogleApiWebFeaturesMonstersGetAllGetAllMonster := client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster(nil)
fmt.Println(moogleApiWebFeaturesMonstersGetAllGetAllMonster.GetName()) // "moogle_api_web_features_monsters_get_all_get_all_monster"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetGetMonsterEntity

```go
moogleApiWebFeaturesMonstersGetGetMonster := client.MoogleApiWebFeaturesMonstersGetGetMonster(nil)
fmt.Println(moogleApiWebFeaturesMonstersGetGetMonster.GetName()) // "moogle_api_web_features_monsters_get_get_monster"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MoogleApiWebFeaturesMonstersGetGetMonster(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity

```go
moogleApiWebFeaturesMonstersSearchSearchMonster := client.MoogleApiWebFeaturesMonstersSearchSearchMonster(nil)
fmt.Println(moogleApiWebFeaturesMonstersSearchSearchMonster.GetName()) // "moogle_api_web_features_monsters_search_search_monster"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MoogleApiWebFeaturesMonstersSearchSearchMonster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewMoogleapiSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

