import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Task from '@modules/tasks/infra/typeorm/entities/Tasks';
import ITasksRepository from '../repositories/ITasksRepository';

@injectable()
class FindAllTasksService {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) { }

  public async execute(): Promise<Task[]> {
    const findTasks = await this.tasksRepository.findAll();

    if (!findTasks) {
      throw new AppError('There are no tasks');
    }

    return findTasks;
  }
}

export default FindAllTasksService;
