export interface IDifficulty {
  bonusExp: number;
  name: string;
}

export class Difficulty {
  difficulty: IDifficulty;

  constructor(difficulty: IDifficulty) {
    this.difficulty = difficulty;
  }
}
