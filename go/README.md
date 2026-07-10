# Moogleapi Golang SDK



The Golang SDK for the Moogleapi API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/moogleapi-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/moogleapi-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/moogleapi-sdk/go=../moogleapi-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/moogleapi-sdk/go"
)

func main() {
    client := sdk.NewMoogleapiSDK(map[string]any{
        "apikey": os.Getenv("MOOGLEAPI_APIKEY"),
    })

    // List moogleApiWebFeaturesCharactersGetAllGetAllCharacter records — the value is the array of records itself.
    moogleApiWebFeaturesCharactersGetAllGetAllCharacters, err := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range moogleApiWebFeaturesCharactersGetAllGetAllCharacters.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
moogleapiwebfeaturescharactersgetallgetallcharacters, err := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = moogleapiwebfeaturescharactersgetallgetallcharacters
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

moogleApiWebFeaturesCharactersGetAllGetAllCharacter, err := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesCharactersGetAllGetAllCharacter) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewMoogleapiSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewMoogleapiSDK

```go
func NewMoogleapiSDK(options map[string]any) *MoogleapiSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *MoogleapiSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MoogleapiSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesCharactersGetAllGetAllCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersGetGetCharacter` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesCharactersGetGetCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersSearchSearchCharacter` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesCharactersSearchSearchCharacter entity instance. |
| `MoogleApiWebFeaturesGamesGetAllGetAllGame` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesGamesGetAllGetAllGame entity instance. |
| `MoogleApiWebFeaturesGamesGetGetGame` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesGamesGetGetGame entity instance. |
| `MoogleApiWebFeaturesMonstersGetAllGetAllMonster` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesMonstersGetAllGetAllMonster entity instance. |
| `MoogleApiWebFeaturesMonstersGetGetMonster` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesMonstersGetGetMonster entity instance. |
| `MoogleApiWebFeaturesMonstersSearchSearchMonster` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesMonstersSearchSearchMonster entity instance. |

### Entity interface (MoogleapiEntity)

All entities implement the `MoogleapiEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    moogleApiWebFeaturesCharactersGetAllGetAllCharacter, err := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // moogleApiWebFeaturesCharactersGetAllGetAllCharacter is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### MoogleApiWebFeaturesCharactersGetAllGetAllCharacter

| Field | Description |
| --- | --- |
| `"game_name"` |  |
| `"id"` |  |
| `"image_url"` |  |
| `"name"` |  |
| `"role"` |  |

Operations: List.

API path: `/api/characters`

#### MoogleApiWebFeaturesCharactersGetGetCharacter

| Field | Description |
| --- | --- |
| `"affiliation"` |  |
| `"description"` |  |
| `"game_name"` |  |
| `"hometown"` |  |
| `"id"` |  |
| `"image_url"` |  |
| `"name"` |  |
| `"race"` |  |
| `"role"` |  |

Operations: Load.

API path: `/api/characters/{id}`

#### MoogleApiWebFeaturesCharactersSearchSearchCharacter

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"game_name"` |  |
| `"id"` |  |
| `"image_url"` |  |
| `"name"` |  |
| `"role"` |  |

Operations: List.

API path: `/api/characters/search`

#### MoogleApiWebFeaturesGamesGetAllGetAllGame

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"name"` |  |
| `"platform"` |  |
| `"release_year"` |  |

Operations: List.

API path: `/api/games`

#### MoogleApiWebFeaturesGamesGetGetGame

| Field | Description |
| --- | --- |
| `"character_count"` |  |
| `"description"` |  |
| `"id"` |  |
| `"monster_count"` |  |
| `"name"` |  |
| `"platform"` |  |
| `"release_year"` |  |

Operations: Load.

API path: `/api/games/{id}`

#### MoogleApiWebFeaturesMonstersGetAllGetAllMonster

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"game_name"` |  |
| `"hit_point"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: List.

API path: `/api/monsters`

#### MoogleApiWebFeaturesMonstersGetGetMonster

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"description"` |  |
| `"game_name"` |  |
| `"hit_point"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: Load.

API path: `/api/monsters/{id}`

#### MoogleApiWebFeaturesMonstersSearchSearchMonster

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"description"` |  |
| `"game_name"` |  |
| `"hit_point"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: List.

API path: `/api/monsters/search`



## Entities


### MoogleApiWebFeaturesCharactersGetAllGetAllCharacter

Create an instance: `moogleApiWebFeaturesCharactersGetAllGetAllCharacter := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `game_name` | `string` |  |
| `id` | `int` |  |
| `image_url` | `string` |  |
| `name` | `string` |  |
| `role` | `string` |  |

#### Example: List

```go
moogleApiWebFeaturesCharactersGetAllGetAllCharacters, err := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesCharactersGetAllGetAllCharacters) // the array of records
```


### MoogleApiWebFeaturesCharactersGetGetCharacter

Create an instance: `moogleApiWebFeaturesCharactersGetGetCharacter := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affiliation` | `string` |  |
| `description` | `string` |  |
| `game_name` | `string` |  |
| `hometown` | `string` |  |
| `id` | `int` |  |
| `image_url` | `string` |  |
| `name` | `string` |  |
| `race` | `string` |  |
| `role` | `string` |  |

#### Example: Load

```go
moogleApiWebFeaturesCharactersGetGetCharacter, err := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesCharactersGetGetCharacter) // the loaded record
```


### MoogleApiWebFeaturesCharactersSearchSearchCharacter

Create an instance: `moogleApiWebFeaturesCharactersSearchSearchCharacter := client.MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `game_name` | `string` |  |
| `id` | `int` |  |
| `image_url` | `string` |  |
| `name` | `string` |  |
| `role` | `string` |  |

#### Example: List

```go
moogleApiWebFeaturesCharactersSearchSearchCharacters, err := client.MoogleApiWebFeaturesCharactersSearchSearchCharacter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesCharactersSearchSearchCharacters) // the array of records
```


### MoogleApiWebFeaturesGamesGetAllGetAllGame

Create an instance: `moogleApiWebFeaturesGamesGetAllGetAllGame := client.MoogleApiWebFeaturesGamesGetAllGetAllGame(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `name` | `string` |  |
| `platform` | `string` |  |
| `release_year` | `int` |  |

#### Example: List

```go
moogleApiWebFeaturesGamesGetAllGetAllGames, err := client.MoogleApiWebFeaturesGamesGetAllGetAllGame(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesGamesGetAllGetAllGames) // the array of records
```


### MoogleApiWebFeaturesGamesGetGetGame

Create an instance: `moogleApiWebFeaturesGamesGetGetGame := client.MoogleApiWebFeaturesGamesGetGetGame(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `character_count` | `int` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `monster_count` | `int` |  |
| `name` | `string` |  |
| `platform` | `string` |  |
| `release_year` | `int` |  |

#### Example: Load

```go
moogleApiWebFeaturesGamesGetGetGame, err := client.MoogleApiWebFeaturesGamesGetGetGame(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesGamesGetGetGame) // the loaded record
```


### MoogleApiWebFeaturesMonstersGetAllGetAllMonster

Create an instance: `moogleApiWebFeaturesMonstersGetAllGetAllMonster := client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `game_name` | `string` |  |
| `hit_point` | `int` |  |
| `id` | `int` |  |
| `name` | `string` |  |

#### Example: List

```go
moogleApiWebFeaturesMonstersGetAllGetAllMonsters, err := client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesMonstersGetAllGetAllMonsters) // the array of records
```


### MoogleApiWebFeaturesMonstersGetGetMonster

Create an instance: `moogleApiWebFeaturesMonstersGetGetMonster := client.MoogleApiWebFeaturesMonstersGetGetMonster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `description` | `string` |  |
| `game_name` | `string` |  |
| `hit_point` | `int` |  |
| `id` | `int` |  |
| `name` | `string` |  |

#### Example: Load

```go
moogleApiWebFeaturesMonstersGetGetMonster, err := client.MoogleApiWebFeaturesMonstersGetGetMonster(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesMonstersGetGetMonster) // the loaded record
```


### MoogleApiWebFeaturesMonstersSearchSearchMonster

Create an instance: `moogleApiWebFeaturesMonstersSearchSearchMonster := client.MoogleApiWebFeaturesMonstersSearchSearchMonster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `description` | `string` |  |
| `game_name` | `string` |  |
| `hit_point` | `int` |  |
| `id` | `int` |  |
| `name` | `string` |  |

#### Example: List

```go
moogleApiWebFeaturesMonstersSearchSearchMonsters, err := client.MoogleApiWebFeaturesMonstersSearchSearchMonster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesMonstersSearchSearchMonsters) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/moogleapi-sdk/go/
├── moogleapi.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/moogleapi-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
moogleapiwebfeaturescharactersgetallgetallcharacter := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil)
moogleapiwebfeaturescharactersgetallgetallcharacter.List(nil, nil)

// moogleapiwebfeaturescharactersgetallgetallcharacter.Data() now returns the moogleapiwebfeaturescharactersgetallgetallcharacter data from the last list
// moogleapiwebfeaturescharactersgetallgetallcharacter.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
