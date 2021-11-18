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

export const timeController = { getTotalTime };
