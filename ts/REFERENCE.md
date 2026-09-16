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
| `gameName` | `string` | No |  |
| `id` | `number` | No |  |
| `imageUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MoogleApiWebFeaturesCharactersGetGetCharacter().load({ id: 1 })
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
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `id` | `number` | No |  |
| `imageUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MoogleApiWebFeaturesCharactersSearchSearchCharacter().list({ query: "example" })
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
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `releaseYear` | `number` | No |  |

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
| `characterCount` | `number` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `monsterCount` | `number` | No |  |
| `name` | `string` | No |  |
| `platform` | `string` | No |  |
| `releaseYear` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MoogleApiWebFeaturesGamesGetGetGame().load({ id: 1 })
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
| `category` | `string` | No |  |
| `gameName` | `string` | No |  |
| `hitPoints` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

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
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `hitPoints` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MoogleApiWebFeaturesMonstersGetGetMonster().load({ id: 1 })
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
| `category` | `string` | No |  |
| `description` | `string` | No |  |
| `gameName` | `string` | No |  |
| `hitPoints` | `number` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MoogleApiWebFeaturesMonstersSearchSearchMonster().list({ query: "example" })
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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ts
const client = new MoogleapiSDK({
  feature: {
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

