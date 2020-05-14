import connection from "../database/connection";

export interface IUserSkill {
    user_id: number;
    id_task: number;
    status: string;
}

export class UserSkill {

  constructor() {}

  async add(userSkill: IUserSkill) {
    const aux = await connection("skills").insert({
      skill_id: userSkill.id_task,
      user_id: userSkill.user_id,
      status: userSkill.status
    });
    console.log("aux:", aux)
  }
  
}