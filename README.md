# Moogleapi SDK

Free REST API for Final Fantasy data — characters, monsters, and games

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About MoogleAPI

[moogleAPI](https://www.moogleapi.com) is a free, open REST API that catalogues data from the Final Fantasy series — playable characters, monsters, and the games they appear in. It is a fan-run project (operated by GitHub user [jackfperryjr](https://github.com/jackfperryjr)) and is not affiliated with Square Enix.

What you get from the API:

- **Characters** — list all, fetch one by id, or search by name/description; filterable by `gameId`.
- **Monsters** — list all, fetch one by id, or search by name/description; filterable by category.
- **Games** — list all or fetch one by id, with associated character and monster counts.

Anonymous access is available with a published quota of 60 requests per minute per IP; an optional premium API key passed via the `X-Api-Key` header raises the limit to 600 requests per minute. Interactive documentation is served at `/scalar/v1`.

Note: third-party uptime trackers have reported the public endpoints as intermittently unavailable, so build in retries and treat the service as best-effort.

## Try it

**TypeScript**
```bash
npm install moogleapi
```

**Python**
```bash
pip install moogleapi-sdk
```

**PHP**
```bash
composer require voxgig/moogleapi-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/moogleapi-sdk/go
```

**Ruby**
```bash
gem install moogleapi-sdk
```

**Lua**
```bash
luarocks install moogleapi-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { MoogleapiSDK } from 'moogleapi'

const client = new MoogleapiSDK({})

// List all moogleapiwebfeaturescharactersgetallgetallcharacters
const moogleapiwebfeaturescharactersgetallgetallcharacters = await client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o moogleapi-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "moogleapi": {
      "command": "/abs/path/to/moogleapi-mcp"
    }
  }
}
```

## Entities

The API exposes 8 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **MoogleApiWebFeaturesCharactersGetAllGetAllCharacter** | List every Final Fantasy character in the database — `GET /api/v1/characters`. | `/api/characters` |
| **MoogleApiWebFeaturesCharactersGetGetCharacter** | Fetch a single character by id — `GET /api/v1/characters/{id}`. | `/api/characters/{id}` |
| **MoogleApiWebFeaturesCharactersSearchSearchCharacter** | Search characters by name or description text. | `/api/characters/search` |
| **MoogleApiWebFeaturesGamesGetAllGetAllGame** | List every Final Fantasy game tracked by the API — `GET /api/v1/games`. | `/api/games` |
| **MoogleApiWebFeaturesGamesGetGetGame** | Fetch a single game by id, including its character and monster counts. | `/api/games/{id}` |
| **MoogleApiWebFeaturesMonstersGetAllGetAllMonster** | List every monster across the Final Fantasy series — `GET /api/v1/monsters`. | `/api/monsters` |
| **MoogleApiWebFeaturesMonstersGetGetMonster** | Fetch a single monster by id. | `/api/monsters/{id}` |
| **MoogleApiWebFeaturesMonstersSearchSearchMonster** | Search monsters by name or description text. | `/api/monsters/search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from moogleapi_sdk import MoogleapiSDK

client = MoogleapiSDK({})

# List all moogleapiwebfeaturescharactersgetallgetallcharacters
moogleapiwebfeaturescharactersgetallgetallcharacters, err = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(None).list(None, None)
```

### PHP

```php
<?php
require_once 'moogleapi_sdk.php';

$client = new MoogleapiSDK([]);

// List all moogleapiwebfeaturescharactersgetallgetallcharacters
[$moogleapiwebfeaturescharactersgetallgetallcharacters, $err] = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/moogleapi-sdk/go"

client := sdk.NewMoogleapiSDK(map[string]any{})

// List all moogleapiwebfeaturescharactersgetallgetallcharacters
moogleapiwebfeaturescharactersgetallgetallcharacters, err := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Moogleapi_sdk"

client = MoogleapiSDK.new({})

# List all moogleapiwebfeaturescharactersgetallgetallcharacters
moogleapiwebfeaturescharactersgetallgetallcharacters, err = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("moogleapi_sdk")

local client = sdk.new({})

-- List all moogleapiwebfeaturescharactersgetallgetallcharacters
local moogleapiwebfeaturescharactersgetallgetallcharacters, err = client:MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MoogleapiSDK.test()
const result = await client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MoogleapiSDK.test(None, None)
result, err = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MoogleapiSDK::test(null, null);
[$result, $err] = $client->MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MoogleapiSDK.test(nil, nil)
result, err = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the MoogleAPI

- Upstream: [https://www.moogleapi.com](https://www.moogleapi.com)
- API docs: [https://www.moogleapi.com/scalar/v1](https://www.moogleapi.com/scalar/v1)

- Community fan project maintained on GitHub by [jackfperryjr](https://github.com/jackfperryjr).
- Not affiliated with, endorsed by, or sponsored by Square Enix; Final Fantasy names and data are property of their respective owners.
- Licence terms are not stated on the homepage — check the upstream repository before redistributing data.

---

Generated from the MoogleAPI OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
