"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "moogle_api_web_features_characters_get_get_character",
        "accessor": "MoogleApiWebFeaturesCharactersGetGetCharacter",
        "op": "list",
        "method": "GET",
        "path": "/api/characters",
        "args": [],
        "select": {
            "game_id": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [],
        "query": [
            "gameId",
            "page",
            "pageSize"
        ],
        "auth": [],
        "status": 200,
        "sample": {
            "items": [
                {
                    "gameName": "x",
                    "id": 1,
                    "imageUrl": "x",
                    "name": "x",
                    "role": "x"
                }
            ],
            "totalCount": 1,
            "page": 1,
            "pageSize": 1
        },
        "idField": "id"
    },
    {
        "entity": "moogle_api_web_features_characters_get_get_character",
        "accessor": "MoogleApiWebFeaturesCharactersGetGetCharacter",
        "op": "load",
        "method": "GET",
        "path": "/api/characters/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [],
        "status": 200,
        "sample": {
            "id": 1,
            "name": "x",
            "description": "x",
            "role": "x",
            "affiliation": "x",
            "race": "x",
            "hometown": "x",
            "imageUrl": "x",
            "gameName": "x"
        },
        "idField": "id"
    },
    {
        "entity": "moogle_api_web_features_characters_search_search_result",
        "accessor": "MoogleApiWebFeaturesCharactersSearchSearchResult",
        "op": "list",
        "method": "GET",
        "path": "/api/characters/search",
        "args": [],
        "select": {
            "game_id": "v1",
            "query": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "gameId"
        ],
        "auth": [],
        "status": 200,
        "sample": {
            "results": [
                {
                    "description": "x",
                    "gameName": "x",
                    "id": 1,
                    "imageUrl": "x",
                    "name": "x",
                    "role": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "moogle_api_web_features_games_get_get_game",
        "accessor": "MoogleApiWebFeaturesGamesGetGetGame",
        "op": "list",
        "method": "GET",
        "path": "/api/games",
        "args": [],
        "select": {
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [],
        "query": [
            "page",
            "pageSize"
        ],
        "auth": [],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": 1,
                    "name": "x",
                    "platform": "x",
                    "releaseYear": 1
                }
            ],
            "totalCount": 1,
            "page": 1,
            "pageSize": 1
        },
        "idField": "id"
    },
    {
        "entity": "moogle_api_web_features_games_get_get_game",
        "accessor": "MoogleApiWebFeaturesGamesGetGetGame",
        "op": "load",
        "method": "GET",
        "path": "/api/games/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [],
        "status": 200,
        "sample": {
            "id": 1,
            "name": "x",
            "releaseYear": 1,
            "platform": "x",
            "description": "x",
            "characterCount": 1,
            "monsterCount": 1
        },
        "idField": "id"
    },
    {
        "entity": "moogle_api_web_features_monsters_get_get_monster",
        "accessor": "MoogleApiWebFeaturesMonstersGetGetMonster",
        "op": "list",
        "method": "GET",
        "path": "/api/monsters",
        "args": [],
        "select": {
            "category": "v1",
            "game_id": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [],
        "query": [
            "gameId",
            "category",
            "page",
            "pageSize"
        ],
        "auth": [],
        "status": 200,
        "sample": {
            "items": [
                {
                    "category": "x",
                    "gameName": "x",
                    "hitPoints": 1,
                    "id": 1,
                    "name": "x"
                }
            ],
            "totalCount": 1,
            "page": 1,
            "pageSize": 1
        },
        "idField": "id"
    },
    {
        "entity": "moogle_api_web_features_monsters_get_get_monster",
        "accessor": "MoogleApiWebFeaturesMonstersGetGetMonster",
        "op": "load",
        "method": "GET",
        "path": "/api/monsters/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [],
        "status": 200,
        "sample": {
            "id": 1,
            "name": "x",
            "description": "x",
            "category": "x",
            "hitPoints": 1,
            "gameName": "x"
        },
        "idField": "id"
    },
    {
        "entity": "moogle_api_web_features_monsters_search_monster_search_result",
        "accessor": "MoogleApiWebFeaturesMonstersSearchMonsterSearchResult",
        "op": "list",
        "method": "GET",
        "path": "/api/monsters/search",
        "args": [],
        "select": {
            "category": "v1",
            "game_id": "v1",
            "query": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "gameId",
            "category"
        ],
        "auth": [],
        "status": 200,
        "sample": {
            "results": [
                {
                    "category": "x",
                    "description": "x",
                    "gameName": "x",
                    "hitPoints": 1,
                    "id": 1,
                    "name": "x"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map