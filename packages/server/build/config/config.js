"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { 
// Environment
NODE_ENV = "production", 
// Database
MONGO_DB_URL_PRODUCTION, MONGO_DB_URL_DEVELOPMENT, MONGO_DB_URL_TEST, 
// Port
PORT, } = process.env;
const CONFIG = {
    production: {
        app: {
            port: PORT || 4000,
        },
        db: {
            url: MONGO_DB_URL_PRODUCTION,
        },
    },
    development: {
        app: {
            port: PORT || 4000,
        },
        db: {
            url: MONGO_DB_URL_DEVELOPMENT,
        },
    },
    test: {
        app: {
            port: PORT || 4000,
        },
        db: {
            url: MONGO_DB_URL_TEST,
        },
    },
};
const config = CONFIG[NODE_ENV];
exports.config = config;
//# sourceMappingURL=config.js.map