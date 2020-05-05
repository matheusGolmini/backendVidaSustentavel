import { ISkill } from "./skill";

interface IUser {
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  skill: ISkill[];
}

export class User {
  user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }
}
