import { API } from "../constants/routes";

import axios from "axios";

export function makeTimeApi() {
  return axios.create({
    baseURL: `http://localhost:4000/`,
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
  return api.patch(
    "",
    {
      "Content-Type": "application/json",
    },
    { data: { insertedTime: insertedTime } }
  );
}
