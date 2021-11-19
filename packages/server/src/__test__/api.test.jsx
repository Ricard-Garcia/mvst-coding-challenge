import request from "supertest";
import { config } from "../config/config";

const requestApi = request(`http://localhost:${config.app.port}/`);

describe("Backend api testing", function () {
  // Get total time
  test("GET total time", () => {
    return requestApi
      .get("")
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual([{ totalTime: expect.any(Number) }]);
      })
      .catch((err) => {
        throw err;
      });
  });
});
