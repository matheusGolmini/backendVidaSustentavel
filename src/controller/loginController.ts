import express from "express";
import { User } from "../model/user";
import { validateUser } from "../service/login"


export async function controllerLogin(
  req: express.Request,
  res: express.Response
) {
    const {email, password} = req.body;
    const user = await new User().getLogin(email, password);
    res.json(validateUser(user))
}
