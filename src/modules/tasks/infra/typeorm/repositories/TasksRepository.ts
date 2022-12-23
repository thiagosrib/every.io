import { getRepository, Repository } from 'typeorm';

import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';
import ICreateTaskDTO from '@modules/tasks/dtos/ICreateTaskDTO';

import Task from '@modules/tasks/infra/typeorm/entities/Tasks';
import User from '@modules/users/infra/typeorm/entities/User';

class TasksRepository implements ITasksRepository {
  private ormRepository: Repository<Task>;
  private ormUserRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(Task);
    this.ormUserRepository = getRepository(User);
  }

  public async findAll(): Promise<Task[] | undefined | null> {
    const findTasks = await this.ormRepository.find();

    return findTasks;
  }

  public async updateStatus(id: string, status: string): Promise<Task | null | undefined> {
    const findTask = await this.ormRepository.findOne({ id })

    if (!findTask) {
      return null;
    }

    findTask.status = status;

    await this.ormRepository.update(id, findTask)

    return findTask;
  }

  public async create({ title, description, status, user }: ICreateTaskDTO): Promise<Task> {
    const userData = this.ormUserRepository

    let task = new Task

    if (user?.id) {
      const getUser = await userData.findOne({ id: user?.id })

      if (getUser) {
        task = this.ormRepository.create({ title, description, status, user: getUser });
      }
    } else {
      task = this.ormRepository.create({ title, description, status });
    }

    await this.ormRepository.save(task);

    return task;
  }
}

export default TasksRepository;
