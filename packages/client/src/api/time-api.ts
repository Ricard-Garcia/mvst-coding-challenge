import { API } from "../constants/routes";

// Utils
import { RequestBody } from "../utils/types";

import axios from "axios";

export function makeTimeApi() {
  return axios.create({
    baseURL: `${API.MAIN}`,
  });
}

// Get total Time
export async function getTotalTime(api = makeTimeApi()) {
  return api.get("", {});
}

// Patch (update) total time
export async function updateTotalTime(
  time: number,
  isClear: boolean = false,
  api = makeTimeApi()
) {
  // Conditional body (increment or clear total time)
  let reqBody: RequestBody;

  if (isClear) {
    reqBody = { clearTime: 0 };
  } else {
    reqBody = { insertedTime: time };
  }

  return api.patch("", reqBody);
}
