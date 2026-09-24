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
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
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
            moogle_api_web_features_characters_get_all_character_summary: {},
            moogle_api_web_features_characters_get_get_character: {},
            moogle_api_web_features_characters_search_search_result: {},
            moogle_api_web_features_games_get_all_game_summary: {},
            moogle_api_web_features_games_get_get_game: {},
            moogle_api_web_features_monsters_get_all_monster_summary: {},
            moogle_api_web_features_monsters_get_get_monster: {},
            moogle_api_web_features_monsters_search_monster_search_result: {},
        }
    };
    entity = {
        "moogle_api_web_features_characters_get_all_character_summary": {
            "fields": [
                {
                    "name": "gameName",
                    "title": "Game Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "imageUrl",
                    "title": "Image Url",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "title": "Role",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "characters"
                                }
                            ],
                            "parts": [
                                "api",
                                "characters"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.items`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "game_id",
                                        "orig": "game_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "game_id",
                                    "page",
                                    "page_size"
                                ]
                            }
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
                    "title": "Affiliation",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "title": "Game Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "hometown",
                    "title": "Hometown",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "imageUrl",
                    "title": "Image Url",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "race",
                    "title": "Race",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "title": "Role",
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
                            "parts": [
                                "api",
                                "characters",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_characters_search_search_result": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "title": "Game Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "imageUrl",
                    "title": "Image Url",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "title": "Role",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "characters"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "parts": [
                                "api",
                                "characters",
                                "search"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "game_id",
                                        "orig": "game_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "game_id",
                                    "query"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_games_get_all_game_summary": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "platform",
                    "title": "Platform",
                    "type": "`$STRING`"
                },
                {
                    "name": "releaseYear",
                    "title": "Release Year",
                    "type": "`$INTEGER`",
                    "format": "int32"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "games"
                                }
                            ],
                            "parts": [
                                "api",
                                "games"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.items`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "page",
                                    "page_size"
                                ]
                            }
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
                    "name": "characterCount",
                    "title": "Character Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "monsterCount",
                    "title": "Monster Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "platform",
                    "title": "Platform",
                    "type": "`$STRING`"
                },
                {
                    "name": "releaseYear",
                    "title": "Release Year",
                    "type": "`$INTEGER`",
                    "format": "int32"
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
                            "parts": [
                                "api",
                                "games",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_monsters_get_all_monster_summary": {
            "fields": [
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "title": "Game Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "hitPoints",
                    "title": "Hit Points",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "monsters"
                                }
                            ],
                            "parts": [
                                "api",
                                "monsters"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.items`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game_id",
                                        "orig": "game_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "category",
                                    "game_id",
                                    "page",
                                    "page_size"
                                ]
                            }
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
                    "title": "Category",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "title": "Game Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "hitPoints",
                    "title": "Hit Points",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "name",
                    "title": "Name",
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
                            "parts": [
                                "api",
                                "monsters",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "moogle_api_web_features_monsters_search_monster_search_result": {
            "fields": [
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "gameName",
                    "title": "Game Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "hitPoints",
                    "title": "Hit Points",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "monsters"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "parts": [
                                "api",
                                "monsters",
                                "search"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game_id",
                                        "orig": "game_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "category",
                                    "game_id",
                                    "query"
                                ]
                            }
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