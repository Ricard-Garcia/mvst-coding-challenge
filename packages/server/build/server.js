"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// import cors from "cors";
const routes_1 = require("./constants/routes");
const time_routes_1 = require("./routes/time-routes");
// Express settings
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((0, helmet_1.default)());
// app.use(cors());
exports.app.use(`${routes_1.SERVER.MAIN}`, time_routes_1.timeRouter);
//# sourceMappingURL=server.js.map