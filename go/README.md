# Moogleapi Golang SDK



The Golang SDK for the Moogleapi API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
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

    // List moogleApiWebFeaturesCharactersGetGetCharacter records — the value is the array of records itself.
    moogleApiWebFeaturesCharactersGetGetCharacters, err := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range moogleApiWebFeaturesCharactersGetGetCharacters.([]any) {
        fmt.Println(item)
    }

    // Load a single moogleApiWebFeaturesCharactersGetGetCharacter — the value is the loaded record.
    moogleApiWebFeaturesCharactersGetGetCharacter, err := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil).Load(map[string]any{"id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(moogleApiWebFeaturesCharactersGetGetCharacter)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
moogleapiwebfeaturescharacterssearchsearchresults, err := client.MoogleApiWebFeaturesCharactersSearchSearchResult(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = moogleapiwebfeaturescharacterssearchsearchresults
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

moogleApiWebFeaturesCharactersSearchSearchResult, err := client.MoogleApiWebFeaturesCharactersSearchSearchResult(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesCharactersSearchSearchResult) // the returned mock data
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
| `MoogleApiWebFeaturesCharactersGetGetCharacter` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesCharactersGetGetCharacter entity instance. |
| `MoogleApiWebFeaturesCharactersSearchSearchResult` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesCharactersSearchSearchResult entity instance. |
| `MoogleApiWebFeaturesGamesGetGetGame` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesGamesGetGetGame entity instance. |
| `MoogleApiWebFeaturesMonstersGetGetMonster` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesMonstersGetGetMonster entity instance. |
| `MoogleApiWebFeaturesMonstersSearchMonsterSearchResult` | `(data map[string]any) MoogleapiEntity` | Create a MoogleApiWebFeaturesMonstersSearchMonsterSearchResult entity instance. |

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

    moogleApiWebFeaturesCharactersGetGetCharacter, err := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // moogleApiWebFeaturesCharactersGetGetCharacter is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### MoogleApiWebFeaturesCharactersGetGetCharacter

| Field | Description |
| --- | --- |
| `"affiliation"` |  |
| `"description"` |  |
| `"gameName"` |  |
| `"hometown"` |  |
| `"id"` |  |
| `"imageUrl"` |  |
| `"name"` |  |
| `"race"` |  |
| `"role"` |  |

Operations: List, Load.

API path: `/api/characters`

#### MoogleApiWebFeaturesCharactersSearchSearchResult

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"gameName"` |  |
| `"id"` |  |
| `"imageUrl"` |  |
| `"name"` |  |
| `"role"` |  |

Operations: List.

API path: `/api/characters/search`

#### MoogleApiWebFeaturesGamesGetGetGame

| Field | Description |
| --- | --- |
| `"characterCount"` |  |
| `"description"` |  |
| `"id"` |  |
| `"monsterCount"` |  |
| `"name"` |  |
| `"platform"` |  |
| `"releaseYear"` |  |

Operations: List, Load.

API path: `/api/games`

#### MoogleApiWebFeaturesMonstersGetGetMonster

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"description"` |  |
| `"gameName"` |  |
| `"hitPoints"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: List, Load.

API path: `/api/monsters`

#### MoogleApiWebFeaturesMonstersSearchMonsterSearchResult

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"description"` |  |
| `"gameName"` |  |
| `"hitPoints"` |  |
| `"id"` |  |
| `"name"` |  |

Operations: List.

API path: `/api/monsters/search`



## Entities


### MoogleApiWebFeaturesCharactersGetGetCharacter

Create an instance: `moogleApiWebFeaturesCharactersGetGetCharacter := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affiliation` | `string` |  |
| `description` | `string` |  |
| `gameName` | `string` |  |
| `hometown` | `string` |  |
| `id` | `int` |  |
| `imageUrl` | `string` |  |
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

#### Example: List

```go
moogleApiWebFeaturesCharactersGetGetCharacters, err := client.MoogleApiWebFeaturesCharactersGetGetCharacter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesCharactersGetGetCharacters) // the array of records
```


### MoogleApiWebFeaturesCharactersSearchSearchResult

Create an instance: `moogleApiWebFeaturesCharactersSearchSearchResult := client.MoogleApiWebFeaturesCharactersSearchSearchResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `gameName` | `string` |  |
| `id` | `int` |  |
| `imageUrl` | `string` |  |
| `name` | `string` |  |
| `role` | `string` |  |

#### Example: List

```go
moogleApiWebFeaturesCharactersSearchSearchResults, err := client.MoogleApiWebFeaturesCharactersSearchSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesCharactersSearchSearchResults) // the array of records
```


### MoogleApiWebFeaturesGamesGetGetGame

Create an instance: `moogleApiWebFeaturesGamesGetGetGame := client.MoogleApiWebFeaturesGamesGetGetGame(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `characterCount` | `int` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `monsterCount` | `int` |  |
| `name` | `string` |  |
| `platform` | `string` |  |
| `releaseYear` | `int` |  |

#### Example: Load

```go
moogleApiWebFeaturesGamesGetGetGame, err := client.MoogleApiWebFeaturesGamesGetGetGame(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesGamesGetGetGame) // the loaded record
```

#### Example: List

```go
moogleApiWebFeaturesGamesGetGetGames, err := client.MoogleApiWebFeaturesGamesGetGetGame(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesGamesGetGetGames) // the array of records
```


### MoogleApiWebFeaturesMonstersGetGetMonster

Create an instance: `moogleApiWebFeaturesMonstersGetGetMonster := client.MoogleApiWebFeaturesMonstersGetGetMonster(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `description` | `string` |  |
| `gameName` | `string` |  |
| `hitPoints` | `int` |  |
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

#### Example: List

```go
moogleApiWebFeaturesMonstersGetGetMonsters, err := client.MoogleApiWebFeaturesMonstersGetGetMonster(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesMonstersGetGetMonsters) // the array of records
```


### MoogleApiWebFeaturesMonstersSearchMonsterSearchResult

Create an instance: `moogleApiWebFeaturesMonstersSearchMonsterSearchResult := client.MoogleApiWebFeaturesMonstersSearchMonsterSearchResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `description` | `string` |  |
| `gameName` | `string` |  |
| `hitPoints` | `int` |  |
| `id` | `int` |  |
| `name` | `string` |  |

#### Example: List

```go
moogleApiWebFeaturesMonstersSearchMonsterSearchResults, err := client.MoogleApiWebFeaturesMonstersSearchMonsterSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moogleApiWebFeaturesMonstersSearchMonsterSearchResults) // the array of records
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

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
moogleapiwebfeaturescharacterssearchsearchresult := client.MoogleApiWebFeaturesCharactersSearchSearchResult(nil)
moogleapiwebfeaturescharacterssearchsearchresult.List(nil, nil)

// moogleapiwebfeaturescharacterssearchsearchresult.Data() now returns the moogleapiwebfeaturescharacterssearchsearchresult data from the last list
// moogleapiwebfeaturescharacterssearchsearchresult.Match() returns the last match criteria
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
