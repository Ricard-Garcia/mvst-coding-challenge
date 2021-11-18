import { timeController } from "../controllers/time-controller";
import { Router } from "express";
import { SERVER } from "../constants/routes";

const timeRouter = Router();

// Get total time
timeRouter.get(`${SERVER.MAIN}`, timeController.getTotalTime);

// Patch (update) total time
timeRouter.patch(`${SERVER.MAIN}`, timeController.updateTotalTime);

export { timeRouter };
