import connection from "../database/connection";

export interface ISkill {
  name: string;
}

export class Skill {
  constructor() {}

  async add(skill: ISkill) {
    const aux = await connection("skills").insert({
      name: skill.name
    });
    console.log(aux);
  }
}
