import { Time } from "../models/time-model";
import { Request, Response, NextFunction } from "express";

// Get total time
async function getTotalTime(req: Request, res: Response, next: NextFunction) {
  try {
    // Get time from database
    const time = await Time.find({}, { totalTime: 1, _id: 0 });

    // Send response
    res.status(200).send({
      data: time,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Couldn't get total time.",
      error: error.message,
    });
    next(error);
  }
}

// Patch (update) total time
async function updateTotalTime(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // Increment
    if ("insertedTime" in req.body) {
      // Extract inserted time
      const { insertedTime } = req.body;
      // Update  database
      await Time.updateMany({}, { $inc: { totalTime: insertedTime } });
    }
    // Clear
    else {
      // Extract clear time
      const { clearTime } = req.body;
      // Update database
      await Time.updateMany({}, { totalTime: clearTime });
    }

    // TODO Add new log

    // Send response
    res.status(200).send({ message: "Total time updated." });
  } catch (error: any) {
    res.status(500).send({
      message: "Couldn't update total time.",
      error: error.message,
    });
    next(error);
  }
}

export const timeController = { getTotalTime, updateTotalTime };
