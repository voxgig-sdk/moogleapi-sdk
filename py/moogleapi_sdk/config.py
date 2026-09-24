# Moogleapi SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Moogleapi",
            "slug": "moogleapi",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.moogleapi.com",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "moogle_api_web_features_characters_get_all_character_summary": {},
                "moogle_api_web_features_characters_get_get_character": {},
                "moogle_api_web_features_characters_search_search_result": {},
                "moogle_api_web_features_games_get_all_game_summary": {},
                "moogle_api_web_features_games_get_get_game": {},
                "moogle_api_web_features_monsters_get_all_monster_summary": {},
                "moogle_api_web_features_monsters_get_get_monster": {},
                "moogle_api_web_features_monsters_search_monster_search_result": {},
            },
        },
        "entity": {
      "moogle_api_web_features_characters_get_all_character_summary": {
        "fields": [
          {
            "name": "gameName",
            "title": "Game Name",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
          {
            "name": "role",
            "title": "Role",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_characters_get_all_character_summary",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                ],
                "parts": [
                  "api",
                  "characters",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "query": [
                    {
                      "name": "game_id",
                      "orig": "game_id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "game_id",
                    "page",
                    "page_size",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_characters_get_get_character": {
        "fields": [
          {
            "name": "affiliation",
            "title": "Affiliation",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "title": "Game Name",
            "type": "`$STRING`",
          },
          {
            "name": "hometown",
            "title": "Hometown",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
          {
            "name": "race",
            "title": "Race",
            "type": "`$STRING`",
          },
          {
            "name": "role",
            "title": "Role",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_characters_get_get_character",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters/{id}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "characters",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_characters_search_search_result": {
        "fields": [
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "title": "Game Name",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
          {
            "name": "role",
            "title": "Role",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_characters_search_search_result",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/characters/search",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "characters",
                  },
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "api",
                  "characters",
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "args": {
                  "query": [
                    {
                      "name": "game_id",
                      "orig": "game_id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "game_id",
                    "query",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_games_get_all_game_summary": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
          {
            "name": "platform",
            "title": "Platform",
            "type": "`$STRING`",
          },
          {
            "name": "releaseYear",
            "title": "Release Year",
            "type": "`$INTEGER`",
            "format": "int32",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_games_get_all_game_summary",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/games",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "games",
                  },
                ],
                "parts": [
                  "api",
                  "games",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_games_get_get_game": {
        "fields": [
          {
            "name": "characterCount",
            "title": "Character Count",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "monsterCount",
            "title": "Monster Count",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
          {
            "name": "platform",
            "title": "Platform",
            "type": "`$STRING`",
          },
          {
            "name": "releaseYear",
            "title": "Release Year",
            "type": "`$INTEGER`",
            "format": "int32",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_games_get_get_game",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/games/{id}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "games",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "games",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_monsters_get_all_monster_summary": {
        "fields": [
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "title": "Game Name",
            "type": "`$STRING`",
          },
          {
            "name": "hitPoints",
            "title": "Hit Points",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_monsters_get_all_monster_summary",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/monsters",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "monsters",
                  },
                ],
                "parts": [
                  "api",
                  "monsters",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "query": [
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "game_id",
                      "orig": "game_id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "category",
                    "game_id",
                    "page",
                    "page_size",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_monsters_get_get_monster": {
        "fields": [
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "title": "Game Name",
            "type": "`$STRING`",
          },
          {
            "name": "hitPoints",
            "title": "Hit Points",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_monsters_get_get_monster",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/monsters/{id}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "monsters",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "monsters",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_monsters_search_monster_search_result": {
        "fields": [
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "title": "Game Name",
            "type": "`$STRING`",
          },
          {
            "name": "hitPoints",
            "title": "Hit Points",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "format": "int32",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_monsters_search_monster_search_result",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/monsters/search",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "monsters",
                  },
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "api",
                  "monsters",
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "args": {
                  "query": [
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "game_id",
                      "orig": "game_id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "category",
                    "game_id",
                    "query",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
