import connection from "../database/connection";

interface ITask {
  name: number;
  email: string;
  start_date: string;
  end_date: string;
  description: string
}

export class Task {

  constructor() {}

  async add(task: ITask) {
    const aux = await connection("taks").insert({
      name: task.name,
      email: task.email,
      start_date: task.start_date,
      end_date: task.end_date,
      description: task.description
    });
    console.log(aux);
  }
}
