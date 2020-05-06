import express from "express";
import * as Controller from "./controller";

const routes = express.Router();

routes.get("/test", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    name: "Henrique",
    cpf: "37267362786386",
    phone: "41 24244242424"
  });
});

routes.post("/users", Controller.controllerCreateUser);
routes.get("/users", Controller.controllerGetListUser);
routes.get("/users/:id", Controller.controllerGetUser);

routes.post("/skills", Controller.controllerCreateSkill);

export { routes };
