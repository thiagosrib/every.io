import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Task from '@modules/tasks/infra/typeorm/entities/Tasks';
import ITasksRepository from '../repositories/ITasksRepository';

interface IRequest {
  id: string;
  status: string;
}

@injectable()
class UpdateStatusTaskService {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) { }

  public async execute({ id, status }: IRequest): Promise<Task> {
    const updatedTask = await this.tasksRepository.updateStatus(id, status);

    if (!updatedTask) {
      throw new AppError('Task not updated');
    }

    return updatedTask;
  }
}

export default UpdateStatusTaskService;
