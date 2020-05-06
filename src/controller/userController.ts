import express from "express";
import { User } from "../model/user";

export function controllerCreateUser(
  req: express.Request,
  res: express.Response
) {
  console.log(req.body);
  const user = new User(req.body);
  user.add();
  res.status(200).send("Skill criada com sucesso!");
}
