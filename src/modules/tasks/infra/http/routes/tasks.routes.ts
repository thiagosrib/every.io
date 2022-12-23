import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import TaskController from '@modules/tasks/infra/http/controllers/TasksController';

const tasksRouter = Router();
const taskController = new TaskController()

tasksRouter.use(ensureAuthenticated);

tasksRouter.get('/', taskController.findAll);

tasksRouter.post('/', taskController.create);

tasksRouter.patch('/:id', taskController.updateStatus);

export default tasksRouter;
