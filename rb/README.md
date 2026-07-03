# Moogleapi Ruby SDK



The Ruby SDK for the Moogleapi API — an entity-oriented client using idiomatic Ruby conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
gem install voxgig-sdk-moogleapi
```

Or add to your `Gemfile`:

```ruby
gem "voxgig-sdk-moogleapi"
```

Then run:

```bash
bundle install
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Moogleapi_sdk"

client = MoogleapiSDK.new({
  "apikey" => ENV["MOOGLEAPI_APIKEY"],
})
```

### 2. List moogleapiwebfeaturescharactersgetallgetallcharacters

```ruby
result, err = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().list
raise err if err

if result.is_a?(Array)
  result.each do |item|
    d = item.data_get
    puts "#{d["id"]} #{d["name"]}"
  end
end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
raise err if err

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
end
```

### Prepare a request without sending it

```ruby
fetchdef, err = client.prepare({
  "path" => "/api/resource/{id}",
  "method" => "DELETE",
  "params" => { "id" => "example" },
})
raise err if err

puts fetchdef["url"]
puts fetchdef["method"]
puts fetchdef["headers"]
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = MoogleapiSDK.test

result, err = client.Moogleapi().load({ "id" => "test01" })
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = MoogleapiSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### MoogleapiSDK

```ruby
require_relative "Moogleapi_sdk"
client = MoogleapiSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = MoogleapiSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MoogleapiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> [Hash, err]` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> [Hash, err]` | Build and send an HTTP request. |
| `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter` | `(data) -> MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` | Create a MoogleApiWebFeaturesCharactersGetAllGetAllCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersGetGetCharacter` | `(data) -> MoogleApiWebFeaturesCharactersGetGetCharacterEntity` | Create a MoogleApiWebFeaturesCharactersGetGetCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersSearchSearchCharacter` | `(data) -> MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` | Create a MoogleApiWebFeaturesCharactersSearchSearchCharacter entity instance. |
| `MoogleApiWebFeaturesGamesGetAllGetAllGame` | `(data) -> MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` | Create a MoogleApiWebFeaturesGamesGetAllGetAllGame entity instance. |
| `MoogleApiWebFeaturesGamesGetGetGame` | `(data) -> MoogleApiWebFeaturesGamesGetGetGameEntity` | Create a MoogleApiWebFeaturesGamesGetGetGame entity instance. |
| `MoogleApiWebFeaturesMonstersGetAllGetAllMonster` | `(data) -> MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` | Create a MoogleApiWebFeaturesMonstersGetAllGetAllMonster entity instance. |
| `MoogleApiWebFeaturesMonstersGetGetMonster` | `(data) -> MoogleApiWebFeaturesMonstersGetGetMonsterEntity` | Create a MoogleApiWebFeaturesMonstersGetGetMonster entity instance. |
| `MoogleApiWebFeaturesMonstersSearchSearchMonster` | `(data) -> MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` | Create a MoogleApiWebFeaturesMonstersSearchSearchMonster entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> [any, err]` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> [any, err]` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> [any, err]` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> [any, err]` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> [any, err]` | Remove an entity. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return `[any, err]`. The first value is a
`Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `false` and `err` contains the error value.

### Entities

#### MoogleApiWebFeaturesCharactersGetAllGetAllCharacter

| Field | Description |
| --- | --- |
| `game_name` |  |
| `id` |  |
| `image_url` |  |
| `name` |  |
| `role` |  |

Operations: List.

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

Operations: Load.

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

Operations: List.

API path: `/api/characters/search`

#### MoogleApiWebFeaturesGamesGetAllGetAllGame

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `platform` |  |
| `release_year` |  |

Operations: List.

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

Operations: Load.

API path: `/api/games/{id}`

#### MoogleApiWebFeaturesMonstersGetAllGetAllMonster

| Field | Description |
| --- | --- |
| `category` |  |
| `game_name` |  |
| `hit_point` |  |
| `id` |  |
| `name` |  |

Operations: List.

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

Operations: Load.

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

Operations: List.

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
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Moogleapi_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Moogleapi_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
moon = client.Moon
moon.load({ "planet_id" => "earth", "id" => "luna" })

# moon.data_get now returns the loaded moon data
# moon.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
