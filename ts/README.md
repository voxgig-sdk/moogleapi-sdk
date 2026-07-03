# Moogleapi TypeScript SDK



The TypeScript SDK for the Moogleapi API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
npm install @voxgig-sdk/moogleapi
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { MoogleapiSDK } from 'moogleapi'

const client = new MoogleapiSDK({
  apikey: process.env.MOOGLEAPI_APIKEY,
})
```

### 2. List moogleapiwebfeaturescharactersgetallgetallcharacters

```ts
const result = await client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().list()

if (result.ok) {
  for (const item of result.data) {
    console.log(item.id, item.name)
  }
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = MoogleapiSDK.test()

const result = await client.Planet().load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new MoogleapiSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Planet()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new MoogleapiSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MOOGLEAPI_TEST_LIVE=TRUE
MOOGLEAPI_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### MoogleapiSDK

#### Constructor

```ts
new MoogleapiSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(data?)` | `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` | Create a MoogleApiWebFeaturesCharactersGetAllGetAllCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersGetGetCharacter(data?)` | `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` | Create a MoogleApiWebFeaturesCharactersGetGetCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersSearchSearchCharacter(data?)` | `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` | Create a MoogleApiWebFeaturesCharactersSearchSearchCharacter entity instance. |
| `MoogleApiWebFeaturesGamesGetAllGetAllGame(data?)` | `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` | Create a MoogleApiWebFeaturesGamesGetAllGetAllGame entity instance. |
| `MoogleApiWebFeaturesGamesGetGetGame(data?)` | `MoogleApiWebFeaturesGamesGetGetGameEntity` | Create a MoogleApiWebFeaturesGamesGetGetGame entity instance. |
| `MoogleApiWebFeaturesMonstersGetAllGetAllMonster(data?)` | `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` | Create a MoogleApiWebFeaturesMonstersGetAllGetAllMonster entity instance. |
| `MoogleApiWebFeaturesMonstersGetGetMonster(data?)` | `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` | Create a MoogleApiWebFeaturesMonstersGetGetMonster entity instance. |
| `MoogleApiWebFeaturesMonstersSearchSearchMonster(data?)` | `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` | Create a MoogleApiWebFeaturesMonstersSearchSearchMonster entity instance. |
| `tester(testopts?, sdkopts?)` | `MoogleapiSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `MoogleapiSDK.test(testopts?, sdkopts?)` | `MoogleapiSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): MoogleapiSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### MoogleApiWebFeaturesCharactersGetAllGetAllCharacter

| Field | Description |
| --- | --- |
| `game_name` |  |
| `id` |  |
| `image_url` |  |
| `name` |  |
| `role` |  |

Operations: list.

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

Operations: load.

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

Operations: list.

API path: `/api/characters/search`

#### MoogleApiWebFeaturesGamesGetAllGetAllGame

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `platform` |  |
| `release_year` |  |

Operations: list.

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

Operations: load.

API path: `/api/games/{id}`

#### MoogleApiWebFeaturesMonstersGetAllGetAllMonster

| Field | Description |
| --- | --- |
| `category` |  |
| `game_name` |  |
| `hit_point` |  |
| `id` |  |
| `name` |  |

Operations: list.

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

Operations: load.

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

Operations: list.

API path: `/api/monsters/search`



## Entities


### MoogleApiWebFeaturesCharactersGetAllGetAllCharacter

Create an instance: `const moogle_api_web_features_characters_get_all_get_all_character = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `game_name` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `image_url` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |

#### Example: List

```ts
const moogle_api_web_features_characters_get_all_get_all_characters = await client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().list()
```


### MoogleApiWebFeaturesCharactersGetGetCharacter

Create an instance: `const moogle_api_web_features_characters_get_get_character = client.MoogleApiWebFeaturesCharactersGetGetCharacter()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affiliation` | ``$STRING`` |  |
| `description` | ``$STRING`` |  |
| `game_name` | ``$STRING`` |  |
| `hometown` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `image_url` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `race` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |

#### Example: Load

```ts
const moogle_api_web_features_characters_get_get_character = await client.MoogleApiWebFeaturesCharactersGetGetCharacter().load({ id: 'moogle_api_web_features_characters_get_get_character_id' })
```


### MoogleApiWebFeaturesCharactersSearchSearchCharacter

Create an instance: `const moogle_api_web_features_characters_search_search_character = client.MoogleApiWebFeaturesCharactersSearchSearchCharacter()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | ``$STRING`` |  |
| `game_name` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `image_url` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |

#### Example: List

```ts
const moogle_api_web_features_characters_search_search_characters = await client.MoogleApiWebFeaturesCharactersSearchSearchCharacter().list()
```


### MoogleApiWebFeaturesGamesGetAllGetAllGame

Create an instance: `const moogle_api_web_features_games_get_all_get_all_game = client.MoogleApiWebFeaturesGamesGetAllGetAllGame()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `platform` | ``$STRING`` |  |
| `release_year` | ``$INTEGER`` |  |

#### Example: List

```ts
const moogle_api_web_features_games_get_all_get_all_games = await client.MoogleApiWebFeaturesGamesGetAllGetAllGame().list()
```


### MoogleApiWebFeaturesGamesGetGetGame

Create an instance: `const moogle_api_web_features_games_get_get_game = client.MoogleApiWebFeaturesGamesGetGetGame()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `character_count` | ``$INTEGER`` |  |
| `description` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `monster_count` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `platform` | ``$STRING`` |  |
| `release_year` | ``$INTEGER`` |  |

#### Example: Load

```ts
const moogle_api_web_features_games_get_get_game = await client.MoogleApiWebFeaturesGamesGetGetGame().load({ id: 'moogle_api_web_features_games_get_get_game_id' })
```


### MoogleApiWebFeaturesMonstersGetAllGetAllMonster

Create an instance: `const moogle_api_web_features_monsters_get_all_get_all_monster = client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | ``$STRING`` |  |
| `game_name` | ``$STRING`` |  |
| `hit_point` | ``$INTEGER`` |  |
| `id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |

#### Example: List

```ts
const moogle_api_web_features_monsters_get_all_get_all_monsters = await client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster().list()
```


### MoogleApiWebFeaturesMonstersGetGetMonster

Create an instance: `const moogle_api_web_features_monsters_get_get_monster = client.MoogleApiWebFeaturesMonstersGetGetMonster()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | ``$STRING`` |  |
| `description` | ``$STRING`` |  |
| `game_name` | ``$STRING`` |  |
| `hit_point` | ``$INTEGER`` |  |
| `id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |

#### Example: Load

```ts
const moogle_api_web_features_monsters_get_get_monster = await client.MoogleApiWebFeaturesMonstersGetGetMonster().load({ id: 'moogle_api_web_features_monsters_get_get_monster_id' })
```


### MoogleApiWebFeaturesMonstersSearchSearchMonster

Create an instance: `const moogle_api_web_features_monsters_search_search_monster = client.MoogleApiWebFeaturesMonstersSearchSearchMonster()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | ``$STRING`` |  |
| `description` | ``$STRING`` |  |
| `game_name` | ``$STRING`` |  |
| `hit_point` | ``$INTEGER`` |  |
| `id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |

#### Example: List

```ts
const moogle_api_web_features_monsters_search_search_monsters = await client.MoogleApiWebFeaturesMonstersSearchSearchMonster().list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
moogleapi/
├── src/
│   ├── MoogleapiSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { MoogleapiSDK } from 'moogleapi'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const moon = client.Moon()
await moon.load({ planet_id: 'earth', id: 'luna' })

// moon.data() now returns the loaded moon data
// moon.match() returns { planet_id: 'earth', id: 'luna' }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
