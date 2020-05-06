export interface ISkill {
  skillId: number;
  name: string;
  experience: number;
}

export class Skill {
  skill: ISkill;

  constructor(skill: ISkill) {
    this.skill = skill;
  }

  add() {}

  edit() {}
}
