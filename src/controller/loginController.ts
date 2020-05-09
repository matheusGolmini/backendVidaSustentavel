import express from "express";
import { User } from "../model/user";
import { validateUser } from "../service/login"


export async function controllerLogin(
  req: express.Request,
  res: express.Response
) {
    console.log(req.body);
    const {email, password} = req.body;
    console.log(email, password)
    const user = await new User().getLogin(email, password);
    res.json(validateUser(user))
    // res.send("Achou o cara na base")
}
