import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "moogle_api_web_features_characters_get_get_character",
    "accessor": "MoogleApiWebFeaturesCharactersGetGetCharacter",
    "op": "list",
    "method": "GET",
    "path": "/api/characters",
    "args": [],
    "select": {
      "game_id": "v1",
      "page": 1,
      "page_size": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "gameId",
      "page",
      "pageSize"
    ],
    "queryArgs": [
      {
        "name": "game_id",
        "wire": "gameId"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "page_size",
        "wire": "pageSize"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "items": [
        {
          "id": 1,
          "name": "x",
          "role": "x",
          "imageUrl": "x",
          "gameName": "x"
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
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
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
      "query": "cloud",
      "game_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "gameId"
    ],
    "queryArgs": [
      {
        "name": "game_id",
        "wire": "gameId"
      },
      {
        "name": "query",
        "wire": "query"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "results": [
        {
          "id": 1,
          "name": "x",
          "role": "x",
          "description": "x",
          "imageUrl": "x",
          "gameName": "x"
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
      "page": 1,
      "page_size": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "pageSize"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "page_size",
        "wire": "pageSize"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "items": [
        {
          "id": 1,
          "name": "x",
          "releaseYear": 1,
          "platform": "x"
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
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
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
      "page": 1,
      "page_size": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "gameId",
      "category",
      "page",
      "pageSize"
    ],
    "queryArgs": [
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "game_id",
        "wire": "gameId"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "page_size",
        "wire": "pageSize"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "items": [
        {
          "id": 1,
          "name": "x",
          "category": "x",
          "hitPoints": 1,
          "gameName": "x"
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
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
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
      "query": "cloud",
      "category": "v1",
      "game_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "gameId",
      "category"
    ],
    "queryArgs": [
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "game_id",
        "wire": "gameId"
      },
      {
        "name": "query",
        "wire": "query"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "results": [
        {
          "id": 1,
          "name": "x",
          "category": "x",
          "hitPoints": 1,
          "description": "x",
          "gameName": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
