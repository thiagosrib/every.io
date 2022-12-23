import Task from '../infra/typeorm/entities/Tasks';
import ICreateTaskDTO from '@modules/tasks/dtos/ICreateTaskDTO';

export default interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<Task>;
  findAll(): Promise<Task[] | undefined | null>;
  updateStatus(id: string, status: string): Promise<Task | undefined | null>;
}
