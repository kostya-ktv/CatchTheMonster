"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    constructor() {
        this._logger = chalk_1.default;
    }
    static getInstance() {
        if (!Logger._instance)
            Logger._instance = new Logger();
        return Logger._instance;
    }
    success(msg) {
        console.log(this._logger.bgGreen(msg));
    }
    info(msg) {
        console.log(this._logger.bgBlue(msg));
    }
    error(msg) {
        console.log(this._logger.bgRed(msg));
    }
}
exports.Logger = Logger;
