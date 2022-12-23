import { v4 as uuid } from 'uuid';

import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';
import ICreateTaskDTO from '@modules/tasks/dtos/ICreateTaskDTO';

import Task from '@modules/tasks/infra/typeorm/entities/Tasks';

class TasksRepository implements ITasksRepository {
  private tasks: Task[] = [];

  public async findAll(): Promise<Task[] | undefined | null> {
    const findTasks = this.tasks;

    return findTasks;
  }

  public async updateStatus(id: string, status: string): Promise<Task | undefined | null> {
    const findTask = this.tasks.find(task => task.id === id);

    if (!findTask) {
      return null;
    }

    findTask.status = status;

    return findTask;
  }

  public async create({ title, description, status }: ICreateTaskDTO): Promise<Task> {
    const task = new Task();

    Object.assign(task, { id: uuid(), title, description, status });

    this.tasks.push(task);

    return task;
  }
}

export default TasksRepository;
