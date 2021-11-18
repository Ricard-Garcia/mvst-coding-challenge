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
exports.seedDefaultTime = void 0;
const time_model_1 = require("../models/time-model");
const default_time_1 = require("./default/default-time");
function seedDefaultTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const time = (0, default_time_1.getDefaultTime)();
        // Delete previous documents
        yield time_model_1.Time.deleteMany({});
        // Insert default values
        yield time_model_1.Time.create([...time]);
    });
}
exports.seedDefaultTime = seedDefaultTime;
// module.exports = { seedDefaultTime };
//# sourceMappingURL=seed.js.map