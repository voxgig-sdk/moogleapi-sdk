"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Moogleapi',
        slug: "moogleapi",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://www.moogleapi.com",
        auth: {
            prefix: 'Bearer',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            moogle_api_web_features_characters_get_all_get_all_character: {},
            moogle_api_web_features_characters_get_get_character: {},
            moogle_api_web_features_characters_search_search_character: {},
            moogle_api_web_features_games_get_all_get_all_game: {},
            moogle_api_web_features_games_get_get_game: {},
            moogle_api_web_features_monsters_get_all_get_all_monster: {},
            moogle_api_web_features_monsters_get_get_monster: {},
            moogle_api_web_features_monsters_search_search_monster: {},
        }
    };
    entity = {
        "moogle_api_web_features_characters_get_all_get_all_character": {
            "fields": [
                {
                    "name": "gameName",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imageUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 20,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/characters",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "characters"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "game_id",
                                    "page",
                                    "page_size"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.items`"
                            },
                            "parts": [
                                "api",
                                "characters"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_characters_get_get_character": {
            "fields": [
                {
                    "name": "affiliation",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "type": "`$STRING`"
                },
                {
                    "name": "hometown",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imageUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "race",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/characters/{id}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "characters"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "characters",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_characters_search_search_character": {
            "fields": [
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imageUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/characters/search",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "characters"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "game_id",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "parts": [
                                "api",
                                "characters",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_games_get_all_get_all_game": {
            "fields": [
                {
                    "format": "int32",
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "platform",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "releaseYear",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 20,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/games",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "games"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "page",
                                    "page_size"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.items`"
                            },
                            "parts": [
                                "api",
                                "games"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_games_get_get_game": {
            "fields": [
                {
                    "format": "int32",
                    "name": "characterCount",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "int32",
                    "name": "monsterCount",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "platform",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "releaseYear",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/games/{id}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "games"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "games",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_monsters_get_all_get_all_monster": {
            "fields": [
                {
                    "name": "category",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "hitPoints",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "int32",
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "game_id",
                                        "orig": "game_id",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 20,
                                        "kind": "query",
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/monsters",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "monsters"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "category",
                                    "game_id",
                                    "page",
                                    "page_size"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.items`"
                            },
                            "parts": [
                                "api",
                                "monsters"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_monsters_get_get_monster": {
            "fields": [
                {
                    "name": "category",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "hitPoints",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "int32",
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/monsters/{id}",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "monsters"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "monsters",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_monsters_search_search_monster": {
            "fields": [
                {
                    "name": "category",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "type": "`$STRING`"
                },
                {
                    "format": "int32",
                    "name": "hitPoints",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "int32",
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "game_id",
                                        "orig": "game_id",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/monsters/search",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "monsters"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "category",
                                    "game_id",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "parts": [
                                "api",
                                "monsters",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map