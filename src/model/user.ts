// import { ISkill } from "./skill";
import connection from "../database/connection";

interface IUser {
  name: string;
  password: string;
  email: string;
  // isAdmin: boolean;
  // skill: ISkill[];
}

export class User {
  constructor() {}

  async add(user: IUser) {
    const aux = await connection("users").insert({
      name: user.name,
      email: user.email,
      password: user.password
    });
    console.log(aux);
  }

  async getList() {
    const users = await connection("users").select("*");
    return users;
  }

  async getId(id: string) {
    const user = await connection("users")
      .where("id", id)
      .select("*");
    return user;
  }
}
