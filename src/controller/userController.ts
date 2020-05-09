import express from "express";
import { User } from "../model/user";

export function controllerCreateUser(
  req: express.Request,
  res: express.Response
) {
  const { name, email, password } = req.body;
  console.log(req.body)
  new User().add({
    name,
    email,
    password
  });
  res.status(200).send("Usuário criada com sucesso!");
}

export async function controllerGetListUser(
  req: express.Request,
  res: express.Response
) {
  const users = await new User().getList();
  return res.json({ users });
}

export async function controllerGetUser(
  req: express.Request,
  res: express.Response
) {
  const { id } = req.params;
  const user = await new User().getId(id);
  return res.json({ user });
}
