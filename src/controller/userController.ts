import express from "express";
import { User } from "../model/user";

export function controllerCreateUser(
  req: express.Request,
  res: express.Response
) {
  console.log(req.body);
  const { name, email, password } = req.body;

  new User().add({
    name,
    email,
    password
  });
  res.status(200).send("Skill criada com sucesso!");
}

export async function controllerGetUser(
  req: express.Request,
  res: express.Response
) {
  const users = await new User().getList();
  console.log(users);
  return res.json({ users });
}
