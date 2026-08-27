# Moogleapi SDK configuration

module MoogleapiConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Moogleapi",
        "slug" => "moogleapi",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://www.moogleapi.com",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "moogle_api_web_features_characters_get_all_get_all_character" => {},
          "moogle_api_web_features_characters_get_get_character" => {},
          "moogle_api_web_features_characters_search_search_character" => {},
          "moogle_api_web_features_games_get_all_get_all_game" => {},
          "moogle_api_web_features_games_get_get_game" => {},
          "moogle_api_web_features_monsters_get_all_get_all_monster" => {},
          "moogle_api_web_features_monsters_get_get_monster" => {},
          "moogle_api_web_features_monsters_search_search_monster" => {},
        },
      },
      "entity" => {
        "moogle_api_web_features_characters_get_all_get_all_character" => {
          "fields" => [
            {
              "name" => "gameName",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "imageUrl",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "role",
              "type" => "`$STRING`",
            },
          ],
          "name" => "moogle_api_web_features_characters_get_all_get_all_character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "game_id",
                        "orig" => "game_id",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 20,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/characters",
                  "parts" => [
                    "api",
                    "characters",
                  ],
                  "select" => {
                    "exist" => [
                      "game_id",
                      "page",
                      "page_size",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "moogle_api_web_features_characters_get_get_character" => {
          "fields" => [
            {
              "name" => "affiliation",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "gameName",
              "type" => "`$STRING`",
            },
            {
              "name" => "hometown",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "imageUrl",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "race",
              "type" => "`$STRING`",
            },
            {
              "name" => "role",
              "type" => "`$STRING`",
            },
          ],
          "name" => "moogle_api_web_features_characters_get_get_character",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/characters/{id}",
                  "parts" => [
                    "api",
                    "characters",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "moogle_api_web_features_characters_search_search_character" => {
          "fields" => [
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "gameName",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "imageUrl",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "role",
              "type" => "`$STRING`",
            },
          ],
          "name" => "moogle_api_web_features_characters_search_search_character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "game_id",
                        "orig" => "game_id",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "query",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/characters/search",
                  "parts" => [
                    "api",
                    "characters",
                    "search",
                  ],
                  "select" => {
                    "exist" => [
                      "game_id",
                      "query",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "moogle_api_web_features_games_get_all_get_all_game" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "platform",
              "type" => "`$STRING`",
            },
            {
              "name" => "releaseYear",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "moogle_api_web_features_games_get_all_get_all_game",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 20,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/games",
                  "parts" => [
                    "api",
                    "games",
                  ],
                  "select" => {
                    "exist" => [
                      "page",
                      "page_size",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "moogle_api_web_features_games_get_get_game" => {
          "fields" => [
            {
              "name" => "characterCount",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "monsterCount",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "platform",
              "type" => "`$STRING`",
            },
            {
              "name" => "releaseYear",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "moogle_api_web_features_games_get_get_game",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/games/{id}",
                  "parts" => [
                    "api",
                    "games",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "moogle_api_web_features_monsters_get_all_get_all_monster" => {
          "fields" => [
            {
              "name" => "category",
              "type" => "`$STRING`",
            },
            {
              "name" => "gameName",
              "type" => "`$STRING`",
            },
            {
              "name" => "hitPoints",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
          ],
          "name" => "moogle_api_web_features_monsters_get_all_get_all_monster",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "game_id",
                        "orig" => "game_id",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 20,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/monsters",
                  "parts" => [
                    "api",
                    "monsters",
                  ],
                  "select" => {
                    "exist" => [
                      "category",
                      "game_id",
                      "page",
                      "page_size",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.items`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "moogle_api_web_features_monsters_get_get_monster" => {
          "fields" => [
            {
              "name" => "category",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "gameName",
              "type" => "`$STRING`",
            },
            {
              "name" => "hitPoints",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
          ],
          "name" => "moogle_api_web_features_monsters_get_get_monster",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/monsters/{id}",
                  "parts" => [
                    "api",
                    "monsters",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "moogle_api_web_features_monsters_search_search_monster" => {
          "fields" => [
            {
              "name" => "category",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "gameName",
              "type" => "`$STRING`",
            },
            {
              "name" => "hitPoints",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
          ],
          "name" => "moogle_api_web_features_monsters_search_search_monster",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "game_id",
                        "orig" => "game_id",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "query",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/monsters/search",
                  "parts" => [
                    "api",
                    "monsters",
                    "search",
                  ],
                  "select" => {
                    "exist" => [
                      "category",
                      "game_id",
                      "query",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MoogleapiFeatures.make_feature(name)
  end
end
