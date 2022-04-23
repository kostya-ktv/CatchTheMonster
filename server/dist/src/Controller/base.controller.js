"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    constructor() { }
    ok(response, data) {
        return this.send(response, 200, data);
    }
    send(response, code, data) {
        return response.status(code).json(data);
    }
}
exports.BaseController = BaseController;
