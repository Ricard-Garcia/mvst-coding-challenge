import mongoose from "mongoose";
import { Schema } from "mongoose";

const timeSchema = new Schema(
  {
    totalTime: {
      type: Number,
      required: [true, "Total time is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Time = mongoose.model("time", timeSchema);

export { Time };
