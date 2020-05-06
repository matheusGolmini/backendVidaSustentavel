import express from "express";
import { Skill } from "../model/skill";

export function controllerCreateSkill(
  req: express.Request,
  res: express.Response
) {
  console.log(req.body);
  const skill = new Skill(req.body);
  skill.add();
  res.status(200).send("Skill criada com sucesso!");
}
