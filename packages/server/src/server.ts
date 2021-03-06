import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";

import { SERVER } from "./constants/routes";

import { timeRouter } from "./routes/time-routes";

// Express settings
export const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(
  rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 1 day
    max: 500,
    message:
      "Reached the limit of queries to MVST. Time Coding Challenge per day.",
  }),
);

app.use(`${SERVER.MAIN}`, timeRouter);
