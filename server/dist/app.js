"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const global_constants_1 = require("./global.constants");
const root_router_1 = require("./src/Router/root.router");
const logger_service_1 = require("./src/Service/Logger/logger.service");
class App {
    constructor() {
        this._app = (0, express_1.default)();
        this._root_router = new root_router_1.RootRouter().getRouter();
        this._port = process.env.SERVER_PORT;
        this._log = logger_service_1.Logger.getInstance();
    }
    static getInstance() {
        if (!App._instance)
            App._instance = new App();
        return App._instance;
    }
    run() {
        this._toUse();
        this._app.listen(this._port, () => this._log.success(`server running on port: ${this._port}`));
    }
    _toUse() {
        this._app.use(express_1.default.json());
        this._app.use(global_constants_1.URL_API, this._root_router);
    }
}
exports.App = App;
