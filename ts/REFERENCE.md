# Moogleapi TypeScript SDK Reference

Complete API reference for the Moogleapi TypeScript SDK.


## MoogleapiSDK

### Constructor

```ts
new MoogleapiSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MoogleapiSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = MoogleapiSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `MoogleapiSDK` instance in test mode.


### Instance Methods

#### `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(data?: object)`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance.

#### `MoogleApiWebFeaturesCharactersGetGetCharacter(data?: object)`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance.

#### `MoogleApiWebFeaturesCharactersSearchSearchCharacter(data?: object)`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance.

#### `MoogleApiWebFeaturesGamesGetAllGetAllGame(data?: object)`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGame` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance.

#### `MoogleApiWebFeaturesGamesGetGetGame(data?: object)`

Create a new `MoogleApiWebFeaturesGamesGetGetGame` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoogleApiWebFeaturesGamesGetGetGameEntity` instance.

#### `MoogleApiWebFeaturesMonstersGetAllGetAllMonster(data?: object)`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonster` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance.

#### `MoogleApiWebFeaturesMonstersGetGetMonster(data?: object)`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonster` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance.

#### `MoogleApiWebFeaturesMonstersSearchSearchMonster(data?: object)`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonster` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `MoogleapiSDK.test()`.

**Returns:** `MoogleapiSDK` instance in test mode.


---

## MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity

```ts
const moogle_api_web_features_characters_get_all_get_all_character = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance with the same client and
options.

#### `client()`

Return the parent `MoogleapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoogleApiWebFeaturesCharactersGetGetCharacterEntity

```ts
const moogle_api_web_features_characters_get_get_character = client.MoogleApiWebFeaturesCharactersGetGetCharacter()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MoogleApiWebFeaturesCharactersGetGetCharacter().load({ id: 'moogle_api_web_features_characters_get_get_character_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance with the same client and
options.

#### `client()`

Return the parent `MoogleapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity

```ts
const moogle_api_web_features_characters_search_search_character = client.MoogleApiWebFeaturesCharactersSearchSearchCharacter()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MoogleApiWebFeaturesCharactersSearchSearchCharacter().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance with the same client and
options.

#### `client()`

Return the parent `MoogleapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoogleApiWebFeaturesGamesGetAllGetAllGameEntity

```ts
const moogle_api_web_features_games_get_all_get_all_game = client.MoogleApiWebFeaturesGamesGetAllGetAllGame()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `platform` | ``$STRING`` | No |  |
| `release_year` | ``$INTEGER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MoogleApiWebFeaturesGamesGetAllGetAllGame().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance with the same client and
options.

#### `client()`

Return the parent `MoogleapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoogleApiWebFeaturesGamesGetGetGameEntity

```ts
const moogle_api_web_features_games_get_get_game = client.MoogleApiWebFeaturesGamesGetGetGame()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MoogleApiWebFeaturesGamesGetGetGame().load({ id: 'moogle_api_web_features_games_get_get_game_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance with the same client and
options.

#### `client()`

Return the parent `MoogleapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity

```ts
const moogle_api_web_features_monsters_get_all_get_all_monster = client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance with the same client and
options.

#### `client()`

Return the parent `MoogleapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoogleApiWebFeaturesMonstersGetGetMonsterEntity

```ts
const moogle_api_web_features_monsters_get_get_monster = client.MoogleApiWebFeaturesMonstersGetGetMonster()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MoogleApiWebFeaturesMonstersGetGetMonster().load({ id: 'moogle_api_web_features_monsters_get_get_monster_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance with the same client and
options.

#### `client()`

Return the parent `MoogleapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity

```ts
const moogle_api_web_features_monsters_search_search_monster = client.MoogleApiWebFeaturesMonstersSearchSearchMonster()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MoogleApiWebFeaturesMonstersSearchSearchMonster().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance with the same client and
options.

#### `client()`

Return the parent `MoogleapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new MoogleapiSDK({
  feature: {
    test: { active: true },
  }
})
```

