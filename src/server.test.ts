import supertest from "supertest";
import { default as app } from "./server";

test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200)
    .end(done);
});
