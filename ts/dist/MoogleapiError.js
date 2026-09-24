"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoogleapiError = void 0;
class MoogleapiError extends Error {
    isMoogleapiError = true;
    sdk = 'Moogleapi';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MoogleapiError = MoogleapiError;
//# sourceMappingURL=MoogleapiError.js.map