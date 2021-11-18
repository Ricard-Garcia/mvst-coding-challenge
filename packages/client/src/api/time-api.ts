import { API } from "../constants/routes";

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
  insertedTime: number,
  api = makeTimeApi()
) {
  return api.patch("", { insertedTime: insertedTime });
}
