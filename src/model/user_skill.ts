import connection from "../database/connection";

export interface IUserSkill {
  skill_id: number;
  user_id: number;
  level: number;
  experience: number;
}

export class UserSkill {

  constructor() {}

  async add(userSkill: IUserSkill) {
    const aux = await connection("skills").insert({
      skill_id: userSkill.skill_id,
      user_id: userSkill.user_id,
      level: userSkill.level,
      experience: userSkill.experience
    });
    console.log("aux:", aux)
  }
}