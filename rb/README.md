# Moogleapi Ruby SDK



The Ruby SDK for the Moogleapi API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/moogleapi-sdk/releases](https://github.com/voxgig-sdk/moogleapi-sdk/releases)


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

### 2. List moogleapiwebfeaturescharactersgetallgetallcharacter records

```ruby
begin
  # list returns an Array of MoogleApiWebFeaturesCharactersGetAllGetAllCharacter records — iterate directly.
  moogleapiwebfeaturescharactersgetallgetallcharacters = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter.list
  moogleapiwebfeaturescharactersgetallgetallcharacters.each do |item|
    puts "#{item["id"]} #{item["game_name"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  moogleapiwebfeaturescharactersgetallgetallcharacters = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = MoogleapiSDK.test

# Entity ops return the bare mock record (raises on error).
moogleapiwebfeaturescharactersgetallgetallcharacter = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter.list()
puts moogleapiwebfeaturescharactersgetallgetallcharacter
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
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `MoogleapiError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `moogle_api_web_features_characters_get_all_get_all_character = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `game_name` | `String` |  |
| `id` | `Integer` |  |
| `image_url` | `String` |  |
| `name` | `String` |  |
| `role` | `String` |  |

#### Example: List

```ruby
# list returns an Array of MoogleApiWebFeaturesCharactersGetAllGetAllCharacter records (raises on error).
moogle_api_web_features_characters_get_all_get_all_characters = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter.list
```


### MoogleApiWebFeaturesCharactersGetGetCharacter

Create an instance: `moogle_api_web_features_characters_get_get_character = client.MoogleApiWebFeaturesCharactersGetGetCharacter`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affiliation` | `String` |  |
| `description` | `String` |  |
| `game_name` | `String` |  |
| `hometown` | `String` |  |
| `id` | `Integer` |  |
| `image_url` | `String` |  |
| `name` | `String` |  |
| `race` | `String` |  |
| `role` | `String` |  |

#### Example: Load

```ruby
# load returns the bare MoogleApiWebFeaturesCharactersGetGetCharacter record (raises on error).
moogle_api_web_features_characters_get_get_character = client.MoogleApiWebFeaturesCharactersGetGetCharacter.load({ "id" => 1 })
```


### MoogleApiWebFeaturesCharactersSearchSearchCharacter

Create an instance: `moogle_api_web_features_characters_search_search_character = client.MoogleApiWebFeaturesCharactersSearchSearchCharacter`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` |  |
| `game_name` | `String` |  |
| `id` | `Integer` |  |
| `image_url` | `String` |  |
| `name` | `String` |  |
| `role` | `String` |  |

#### Example: List

```ruby
# list returns an Array of MoogleApiWebFeaturesCharactersSearchSearchCharacter records (raises on error).
moogle_api_web_features_characters_search_search_characters = client.MoogleApiWebFeaturesCharactersSearchSearchCharacter.list
```


### MoogleApiWebFeaturesGamesGetAllGetAllGame

Create an instance: `moogle_api_web_features_games_get_all_get_all_game = client.MoogleApiWebFeaturesGamesGetAllGetAllGame`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `platform` | `String` |  |
| `release_year` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of MoogleApiWebFeaturesGamesGetAllGetAllGame records (raises on error).
moogle_api_web_features_games_get_all_get_all_games = client.MoogleApiWebFeaturesGamesGetAllGetAllGame.list
```


### MoogleApiWebFeaturesGamesGetGetGame

Create an instance: `moogle_api_web_features_games_get_get_game = client.MoogleApiWebFeaturesGamesGetGetGame`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `character_count` | `Integer` |  |
| `description` | `String` |  |
| `id` | `Integer` |  |
| `monster_count` | `Integer` |  |
| `name` | `String` |  |
| `platform` | `String` |  |
| `release_year` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare MoogleApiWebFeaturesGamesGetGetGame record (raises on error).
moogle_api_web_features_games_get_get_game = client.MoogleApiWebFeaturesGamesGetGetGame.load({ "id" => 1 })
```


### MoogleApiWebFeaturesMonstersGetAllGetAllMonster

Create an instance: `moogle_api_web_features_monsters_get_all_get_all_monster = client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `String` |  |
| `game_name` | `String` |  |
| `hit_point` | `Integer` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |

#### Example: List

```ruby
# list returns an Array of MoogleApiWebFeaturesMonstersGetAllGetAllMonster records (raises on error).
moogle_api_web_features_monsters_get_all_get_all_monsters = client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster.list
```


### MoogleApiWebFeaturesMonstersGetGetMonster

Create an instance: `moogle_api_web_features_monsters_get_get_monster = client.MoogleApiWebFeaturesMonstersGetGetMonster`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `String` |  |
| `description` | `String` |  |
| `game_name` | `String` |  |
| `hit_point` | `Integer` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |

#### Example: Load

```ruby
# load returns the bare MoogleApiWebFeaturesMonstersGetGetMonster record (raises on error).
moogle_api_web_features_monsters_get_get_monster = client.MoogleApiWebFeaturesMonstersGetGetMonster.load({ "id" => 1 })
```


### MoogleApiWebFeaturesMonstersSearchSearchMonster

Create an instance: `moogle_api_web_features_monsters_search_search_monster = client.MoogleApiWebFeaturesMonstersSearchSearchMonster`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `String` |  |
| `description` | `String` |  |
| `game_name` | `String` |  |
| `hit_point` | `Integer` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |

#### Example: List

```ruby
# list returns an Array of MoogleApiWebFeaturesMonstersSearchSearchMonster records (raises on error).
moogle_api_web_features_monsters_search_search_monsters = client.MoogleApiWebFeaturesMonstersSearchSearchMonster.list
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

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

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
moogleapiwebfeaturescharactersgetallgetallcharacter = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter
moogleapiwebfeaturescharactersgetallgetallcharacter.list()

# moogleapiwebfeaturescharactersgetallgetallcharacter.data_get now returns the moogleapiwebfeaturescharactersgetallgetallcharacter data from the last list
# moogleapiwebfeaturescharactersgetallgetallcharacter.match_get returns the last match criteria
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
