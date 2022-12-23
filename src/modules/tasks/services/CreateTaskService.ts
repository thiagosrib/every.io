import { injectable, inject } from 'tsyringe';

import Task from '@modules/tasks/infra/typeorm/entities/Tasks';
import ITasksRepository from '../repositories/ITasksRepository';

interface IRequest {
  title: string;
  description: string;
  status: string;
  userId?: string;
}

@injectable()
class CreateTaskService {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) { }

  public async execute({ title, description, status, userId }: IRequest): Promise<Task> {
    const data = {
      title,
      description,
      status,
      user: {}
    }

    if (userId) {
      data.user = {
        id: userId
      }
    }

    const task = await this.tasksRepository.create(data);

    return task;
  }
}

export default CreateTaskService;
