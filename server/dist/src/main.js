"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const global_constants_1 = require("../global.constants");
const app_1 = require("./app");
class Main {
    constructor() {
        this._server = app_1.App.getInstance();
        (0, dotenv_1.config)({ path: global_constants_1.PATH_CONFIG_ENV });
    }
    static getInstance() {
        if (!Main._instance)
            Main._instance = new Main();
        return Main._instance;
    }
    start() {
        this._server.run();
    }
}
Main.getInstance().start();
