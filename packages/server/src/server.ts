import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { SERVER } from "./constants/routes";

import { timeRouter } from "./routes/time-routes";

// Express settings
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(`${SERVER.MAIN}`, timeRouter);
