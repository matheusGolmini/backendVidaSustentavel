import { IDifficulty } from "./difficulty";

export interface IRewards {
  experienceAmount: number;
  skill: string;
  difficulty: IDifficulty;
}

export class Rewards {
  rewards: IRewards;

  constructor(rewards: IRewards) {
    this.rewards = rewards;
  }
}
