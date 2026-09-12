"use strict";
// Moogleapi Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.MoogleapiSDK = exports.MoogleapiEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity_1 = require("./entity/MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity");
const MoogleApiWebFeaturesCharactersGetGetCharacterEntity_1 = require("./entity/MoogleApiWebFeaturesCharactersGetGetCharacterEntity");
const MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity_1 = require("./entity/MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity");
const MoogleApiWebFeaturesGamesGetAllGetAllGameEntity_1 = require("./entity/MoogleApiWebFeaturesGamesGetAllGetAllGameEntity");
const MoogleApiWebFeaturesGamesGetGetGameEntity_1 = require("./entity/MoogleApiWebFeaturesGamesGetGetGameEntity");
const MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity_1 = require("./entity/MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity");
const MoogleApiWebFeaturesMonstersGetGetMonsterEntity_1 = require("./entity/MoogleApiWebFeaturesMonstersGetGetMonsterEntity");
const MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity_1 = require("./entity/MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const MoogleapiEntityBase_1 = require("./MoogleapiEntityBase");
Object.defineProperty(exports, "MoogleapiEntityBase", { enumerable: true, get: function () { return MoogleapiEntityBase_1.MoogleapiEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class MoogleapiSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('MoogleapiSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('MoogleapiSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('MoogleapiSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().list()` / `client.MoogleApiWebFeaturesCharactersGetAllGetAllCharacter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoogleApiWebFeaturesCharactersGetAllGetAllCharacter(entopts) {
        const self = this;
        return new MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity_1.MoogleApiWebFeaturesCharactersGetAllGetAllCharacterEntity(self, entopts);
    }
    // Entity access: `client.MoogleApiWebFeaturesCharactersGetGetCharacter().list()` / `client.MoogleApiWebFeaturesCharactersGetGetCharacter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoogleApiWebFeaturesCharactersGetGetCharacter(entopts) {
        const self = this;
        return new MoogleApiWebFeaturesCharactersGetGetCharacterEntity_1.MoogleApiWebFeaturesCharactersGetGetCharacterEntity(self, entopts);
    }
    // Entity access: `client.MoogleApiWebFeaturesCharactersSearchSearchCharacter().list()` / `client.MoogleApiWebFeaturesCharactersSearchSearchCharacter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoogleApiWebFeaturesCharactersSearchSearchCharacter(entopts) {
        const self = this;
        return new MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity_1.MoogleApiWebFeaturesCharactersSearchSearchCharacterEntity(self, entopts);
    }
    // Entity access: `client.MoogleApiWebFeaturesGamesGetAllGetAllGame().list()` / `client.MoogleApiWebFeaturesGamesGetAllGetAllGame().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoogleApiWebFeaturesGamesGetAllGetAllGame(entopts) {
        const self = this;
        return new MoogleApiWebFeaturesGamesGetAllGetAllGameEntity_1.MoogleApiWebFeaturesGamesGetAllGetAllGameEntity(self, entopts);
    }
    // Entity access: `client.MoogleApiWebFeaturesGamesGetGetGame().list()` / `client.MoogleApiWebFeaturesGamesGetGetGame().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoogleApiWebFeaturesGamesGetGetGame(entopts) {
        const self = this;
        return new MoogleApiWebFeaturesGamesGetGetGameEntity_1.MoogleApiWebFeaturesGamesGetGetGameEntity(self, entopts);
    }
    // Entity access: `client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster().list()` / `client.MoogleApiWebFeaturesMonstersGetAllGetAllMonster().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoogleApiWebFeaturesMonstersGetAllGetAllMonster(entopts) {
        const self = this;
        return new MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity_1.MoogleApiWebFeaturesMonstersGetAllGetAllMonsterEntity(self, entopts);
    }
    // Entity access: `client.MoogleApiWebFeaturesMonstersGetGetMonster().list()` / `client.MoogleApiWebFeaturesMonstersGetGetMonster().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoogleApiWebFeaturesMonstersGetGetMonster(entopts) {
        const self = this;
        return new MoogleApiWebFeaturesMonstersGetGetMonsterEntity_1.MoogleApiWebFeaturesMonstersGetGetMonsterEntity(self, entopts);
    }
    // Entity access: `client.MoogleApiWebFeaturesMonstersSearchSearchMonster().list()` / `client.MoogleApiWebFeaturesMonstersSearchSearchMonster().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MoogleApiWebFeaturesMonstersSearchSearchMonster(entopts) {
        const self = this;
        return new MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity_1.MoogleApiWebFeaturesMonstersSearchSearchMonsterEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new MoogleapiSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return MoogleapiSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Moogleapi' };
    }
    toString() {
        return 'Moogleapi ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.MoogleapiSDK = MoogleapiSDK;
const SDK = MoogleapiSDK;
exports.SDK = SDK;
//# sourceMappingURL=MoogleapiSDK.js.map