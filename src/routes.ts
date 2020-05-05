import express from "express";

const routes = express.Router();

routes.get("/test", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    name: "Henrique",
    cpf: "37267362786386",
    phone: "41 24244242424"
  });
});

routes.post("/users");
routes.get("/users");

export { routes };
