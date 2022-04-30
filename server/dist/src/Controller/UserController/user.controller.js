"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../base.controller");
class UserController extends base_controller_1.BaseController {
    constructor() {
        super();
    }
    login(request, response, next) {
        try {
            return this.ok(response);
        }
        catch (error) {
            next(error);
        }
    }
    logout(request, response, next) {
        try {
            return this.ok(response);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UserController = UserController;
