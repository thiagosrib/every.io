import { container } from 'tsyringe';

import ITasksRepository from '@modules/tasks/repositories/ITasksRepository';
import TasksRepository from '@modules/tasks/infra/typeorm/repositories/TasksRepository';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<ITasksRepository>('TasksRepository', TasksRepository);
container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository);

