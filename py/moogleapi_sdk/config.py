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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
                "moogle_api_web_features_characters_get_all_get_all_character": {},
                "moogle_api_web_features_characters_get_get_character": {},
                "moogle_api_web_features_characters_search_search_character": {},
                "moogle_api_web_features_games_get_all_get_all_game": {},
                "moogle_api_web_features_games_get_get_game": {},
                "moogle_api_web_features_monsters_get_all_get_all_monster": {},
                "moogle_api_web_features_monsters_get_get_monster": {},
                "moogle_api_web_features_monsters_search_search_monster": {},
            },
        },
        "entity": {
      "moogle_api_web_features_characters_get_all_get_all_character": {
        "fields": [
          {
            "name": "gameName",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "imageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "role",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_characters_get_all_get_all_character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "game_id",
                      "orig": "game_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "game_id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "parts": [
                  "api",
                  "characters",
                ],
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
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "type": "`$STRING`",
          },
          {
            "name": "hometown",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "imageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "race",
            "type": "`$STRING`",
          },
          {
            "name": "role",
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "characters",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_characters_search_search_character": {
        "fields": [
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "imageUrl",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "role",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_characters_search_search_character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "game_id",
                      "orig": "game_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "game_id",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "api",
                  "characters",
                  "search",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_games_get_all_get_all_game": {
        "fields": [
          {
            "format": "int32",
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "platform",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "releaseYear",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_games_get_all_get_all_game",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "parts": [
                  "api",
                  "games",
                ],
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
            "format": "int32",
            "name": "characterCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "format": "int32",
            "name": "monsterCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "platform",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "releaseYear",
            "type": "`$INTEGER`",
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "games",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_monsters_get_all_get_all_monster": {
        "fields": [
          {
            "name": "category",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "hitPoints",
            "type": "`$INTEGER`",
          },
          {
            "format": "int32",
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_monsters_get_all_get_all_monster",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "game_id",
                      "orig": "game_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "category",
                    "game_id",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "parts": [
                  "api",
                  "monsters",
                ],
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
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "hitPoints",
            "type": "`$INTEGER`",
          },
          {
            "format": "int32",
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "monsters",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "moogle_api_web_features_monsters_search_search_monster": {
        "fields": [
          {
            "name": "category",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "gameName",
            "type": "`$STRING`",
          },
          {
            "format": "int32",
            "name": "hitPoints",
            "type": "`$INTEGER`",
          },
          {
            "format": "int32",
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "moogle_api_web_features_monsters_search_search_monster",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "game_id",
                      "orig": "game_id",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "category",
                    "game_id",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "api",
                  "monsters",
                  "search",
                ],
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
