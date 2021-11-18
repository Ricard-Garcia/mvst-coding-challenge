"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const timeSchema = new mongoose_2.Schema({
    totalTime: {
        type: Number,
        required: [true, "Total time is required"],
    },
}, {
    timestamps: true,
});
const Time = mongoose_1.default.model("time", timeSchema);
exports.Time = Time;
//# sourceMappingURL=time-model.js.map