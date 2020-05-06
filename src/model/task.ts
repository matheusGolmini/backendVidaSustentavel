import { IRewards } from "./rewards";

interface ITask {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: boolean;
  rewards: IRewards[];
}

export class Task {
  task: ITask;

  constructor(task: ITask) {
    this.task = task;
  }
}
