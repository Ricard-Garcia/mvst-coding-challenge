import { Time } from "../models/time-model";
import { getDefaultTime } from "./default/default-time";

export async function seedDefaultTime() {
  const time = getDefaultTime();
  // Delete previous documents
  await Time.deleteMany({});
  // Insert default values
  await Time.create([...time]);
}

// module.exports = { seedDefaultTime };
