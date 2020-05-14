import connection from "../database/connection";

export interface IRewards {
  id_task: number;
  id_skill: number;
  status: string;
}

export class Rewards {

  constructor() {}

  async add(rewards: IRewards) {
    const aux = await connection("skills").insert({
      id_task: rewards.id_task,
      id_skill: rewards.id_skill,
      status: rewards.status
    });
    console.log(aux);
  }
}
