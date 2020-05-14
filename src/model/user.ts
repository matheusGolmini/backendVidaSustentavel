// import { ISkill } from "./skill";
import connection from "../database/connection";

export interface IUser {
  name: string;
  password: string;
  email: string;
  is_admin: boolean;
  sign_in_date: string
}

export class User {
  constructor() {}

  async add(user: IUser) {
    const aux = await connection("users").insert({
      name: user.name,
      email: user.email,
      password: user.password,
      is_admin: user.is_admin,
      sign_in_date: user.sign_in_date
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

  async getLogin(email: string, password: string) {
    const user = await connection("users")
      .limit(1)
      .where("email", email, )
      .where('password', password)
      .select("*");
    return user[0];
  }
}
