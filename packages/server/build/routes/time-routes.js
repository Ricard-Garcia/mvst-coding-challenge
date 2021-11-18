"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeRouter = void 0;
const time_controller_1 = require("../controllers/time-controller");
const express_1 = require("express");
const routes_1 = require("../constants/routes");
const timeRouter = (0, express_1.Router)();
exports.timeRouter = timeRouter;
// Get total time
timeRouter.get(`${routes_1.SERVER.MAIN}`, time_controller_1.timeController.getTotalTime);
//# sourceMappingURL=time-routes.js.map