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

#### `MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(data=None)`

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesCharactersGetGetCharacter(data=None)`

Create a new `MoogleApiWebFeaturesCharactersGetGetCharacterEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesCharactersSearchSearchCharacter(data=None)`

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesGamesGetAllGetAllGame(data=None)`

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesGamesGetGetGame(data=None)`

Create a new `MoogleApiWebFeaturesGamesGetGetGameEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetAllGetAllMonster(data=None)`

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesMonstersGetGetMonster(data=None)`

Create a new `MoogleApiWebFeaturesMonstersGetGetMonsterEntity` instance. Pass `None` for no initial data.

#### `MoogleApiWebFeaturesMonstersSearchSearchMonster(data=None)`

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance. Pass `None` for no initial data.

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

## MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity

```python
moogle_api_web_features_characters_get_all_get_all_character = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `game_name` | `str` | No |  |
| `id` | `int` | No |  |
| `image_url` | `str` | No |  |
| `name` | `str` | No |  |
| `role` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().list()
for moogle_api_web_features_characters_get_all_get_all_character in results:
    print(moogle_api_web_features_characters_get_all_get_all_character)
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

Create a new `MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity` instance with the same options.

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
| `game_name` | `str` | No |  |
| `hometown` | `str` | No |  |
| `id` | `int` | No |  |
| `image_url` | `str` | No |  |
| `name` | `str` | No |  |
| `race` | `str` | No |  |
| `role` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MoogleApiWebFeaturesCharactersGetGetCharacter().load({"id": "moogle_api_web_features_characters_get_get_character_id"})
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

## MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity

```python
moogle_api_web_features_characters_search_search_character = client.MoogleApiWebFeaturesCharactersSearchSearchCharacter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `game_name` | `str` | No |  |
| `id` | `int` | No |  |
| `image_url` | `str` | No |  |
| `name` | `str` | No |  |
| `role` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesCharactersSearchSearchCharacter().list()
for moogle_api_web_features_characters_search_search_character in results:
    print(moogle_api_web_features_characters_search_search_character)
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

Create a new `MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MoogleApiWebFeaturesGamesGetAllGetAllGameEntity

```python
moogle_api_web_features_games_get_all_get_all_game = client.MoogleApiWebFeaturesGamesGetAllGetAllGame()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `platform` | `str` | No |  |
| `release_year` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesGamesGetAllGetAllGame().list()
for moogle_api_web_features_games_get_all_get_all_game in results:
    print(moogle_api_web_features_games_get_all_get_all_game)
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

Create a new `MoogleApiWebFeaturesGamesGetAllGetAllGameEntity` instance with the same options.

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
| `character_count` | `int` | No |  |
| `description` | `str` | No |  |
| `id` | `int` | No |  |
| `monster_count` | `int` | No |  |
| `name` | `str` | No |  |
| `platform` | `str` | No |  |
| `release_year` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MoogleApiWebFeaturesGamesGetGetGame().load({"id": "moogle_api_web_features_games_get_get_game_id"})
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

## MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity

```python
moogle_api_web_features_monsters_get_all_get_all_monster = client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No |  |
| `game_name` | `str` | No |  |
| `hit_point` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster().list()
for moogle_api_web_features_monsters_get_all_get_all_monster in results:
    print(moogle_api_web_features_monsters_get_all_get_all_monster)
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

Create a new `MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity` instance with the same options.

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
| `game_name` | `str` | No |  |
| `hit_point` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MoogleApiWebFeaturesMonstersGetGetMonster().load({"id": "moogle_api_web_features_monsters_get_get_monster_id"})
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

## MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity

```python
moogle_api_web_features_monsters_search_search_monster = client.MoogleApiWebFeaturesMonstersSearchSearchMonster()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No |  |
| `description` | `str` | No |  |
| `game_name` | `str` | No |  |
| `hit_point` | `int` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MoogleApiWebFeaturesMonstersSearchSearchMonster().list()
for moogle_api_web_features_monsters_search_search_monster in results:
    print(moogle_api_web_features_monsters_search_search_monster)
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

Create a new `MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = MoogleapiSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

