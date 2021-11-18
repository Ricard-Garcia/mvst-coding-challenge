"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeController = void 0;
const time_model_1 = require("../models/time-model");
// Get total time
function getTotalTime(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Get time from database
            const time = yield time_model_1.Time.find({}, { time: 1 });
            // Send response
            res.status(200).send({
                data: time,
            });
        }
        catch (error) {
            res.status(500).send({
                message: "Couldn't get total time.",
                error: error.message,
            });
            next(error);
        }
    });
}
exports.timeController = { getTotalTime };
//# sourceMappingURL=time-controller.js.map