import mongoose from "mongoose";
import { Schema } from "mongoose";

const logSchema = new Schema(
  {
    logTime: {
      type: Number,
      required: [true, "Log time is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Log = mongoose.model("log", logSchema);

export { Log };
