import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTaskService from '@modules/tasks/services/CreateTaskService';
import UpdateStatusTaskService from '@modules/tasks/services/UpdateStatusTaskService';

export default class TaskController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description, status, userId } = request.body;

    const createTaskService = container.resolve(CreateTaskService);

    const task = await createTaskService.execute({
      title,
      description,
      status,
      userId
    });

    return response.json(task);
  }

  public async findAll(request: Request, response: Response): Promise<Response> {
    return response.json({})
  }

  public async updateStatus(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status } = request.body;

    const updateStatusTaskService = container.resolve(UpdateStatusTaskService)

    const task = await updateStatusTaskService.execute({
      id,
      status
    })

    return response.json(task)
  }
}
