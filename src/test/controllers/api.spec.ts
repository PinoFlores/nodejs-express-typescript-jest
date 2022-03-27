import request from "supertest";

import app from "../../app";

describe("GET /api", () => {
  it("should return 200 OK", () => {
    return request(app).get("/").expect(200);
  });
});
