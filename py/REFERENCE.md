# Moogleapi Python SDK Reference

Complete API reference for the Moogleapi Python SDK.


## MoogleapiSDK

### Constructor

```python
from moogleapi_sdk import MoogleapiSDK

client = MoogleapiSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MoogleapiSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = MoogleapiSDK.test()
```


### Instance Methods

#### `MoogleApiWebFeaturesCharactersGetAllCharacterSummary(data=None)`

Create a new `MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesCharactersGetGetCharacter(data=None)`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesCharactersSearchSearchResult(data=None)`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchResultEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesGamesGetAllGameSummary(data=None)`

Create a new `MoogleApiWebFeaturesGamesGetAllGameSummaryEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesGamesGetGetGame(data=None)`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetAllMonsterSummary(data=None)`

Create a new `MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetGetMonster(data=None)`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesMonstersSearchMonsterSearchResult(data=None)`

Create a new `MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity

```python
moogle_api_web_features_characters_get_all_character_summary = client.MoogleApiWebFeaturesCharactersGetAllCharacterSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `gameName` | `str` | No |  |
| `id` | `int` | No |  |
| `imageUrl` | `str` | No |  |
| `name` | `str` | No |  |
| `role` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesCharactersGetAllCharacterSummary().list()
for moogle_api_web_features_characters_get_all_character_summary in results:
    print(moogle_api_web_features_characters_get_all_character_summary)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesCharactersGetAllCharacterSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersGetGetCharacterEntity

```python
moogle_api_web_features_characters_get_get_character = client.MoogleApiWebFeaturesCharactersGetGetCharacter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affiliation` | `str` | No |  |
| `description` | `str` | No |  |
| `gameName` | `str` | No |  |
| `hometown` | `str` | No |  |
| `id` | `int` | No |  |
| `imageUrl` | `str` | No |  |
| `name` | `str` | No |  |
| `race` | `str` | No |  |
| `role` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MoogleApiWebFeaturesCharactersGetGetCharacter().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoogleApiWebFeaturesCharactersSearchSearchResultEntity

```python
moogle_api_web_features_characters_search_search_result = client.MoogleApiWebFeaturesCharactersSearchSearchResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `gameName` | `str` | No |  |
| `id` | `int` | No |  |
| `imageUrl` | `str` | No |  |
| `name` | `str` | No |  |
| `role` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesCharactersSearchSearchResult().list({"query": "example"})
for moogle_api_web_features_characters_search_search_result in results:
    print(moogle_api_web_features_characters_search_search_result)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetAllGameSummaryEntity

```python
moogle_api_web_features_games_get_all_game_summary = client.MoogleApiWebFeaturesGamesGetAllGameSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `platform` | `str` | No |  |
| `releaseYear` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesGamesGetAllGameSummary().list()
for moogle_api_web_features_games_get_all_game_summary in results:
    print(moogle_api_web_features_games_get_all_game_summary)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesGamesGetAllGameSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetGetGameEntity

```python
moogle_api_web_features_games_get_get_game = client.MoogleApiWebFeaturesGamesGetGetGame()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `characterCount` | `int` | No |  |
| `description` | `str` | No |  |
| `id` | `int` | No |  |
| `monsterCount` | `int` | No |  |
| `name` | `str` | No |  |
| `platform` | `str` | No |  |
| `releaseYear` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MoogleApiWebFeaturesGamesGetGetGame().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity

```python
moogle_api_web_features_monsters_get_all_monster_summary = client.MoogleApiWebFeaturesMonstersGetAllMonsterSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No |  |
| `gameName` | `str` | No |  |
| `hitPoints` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesMonstersGetAllMonsterSummary().list()
for moogle_api_web_features_monsters_get_all_monster_summary in results:
    print(moogle_api_web_features_monsters_get_all_monster_summary)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesMonstersGetAllMonsterSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersGetGetMonsterEntity

```python
moogle_api_web_features_monsters_get_get_monster = client.MoogleApiWebFeaturesMonstersGetGetMonster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No |  |
| `description` | `str` | No |  |
| `gameName` | `str` | No |  |
| `hitPoints` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MoogleApiWebFeaturesMonstersGetGetMonster().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity

```python
moogle_api_web_features_monsters_search_monster_search_result = client.MoogleApiWebFeaturesMonstersSearchMonsterSearchResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No |  |
| `description` | `str` | No |  |
| `gameName` | `str` | No |  |
| `hitPoints` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesMonstersSearchMonsterSearchResult().list({"query": "example"})
for moogle_api_web_features_monsters_search_monster_search_result in results:
    print(moogle_api_web_features_monsters_search_monster_search_result)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoogleApiWebFeaturesMonstersSearchMonsterSearchResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```python
client = MoogleapiSDK({
    "feature": {
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
    },
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

Rate limiting.

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

Retry.

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

Test transport.

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

Timeout.

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

