import FakeTasksRepository from '../repositories/fakes/FakeTasksRepository';
import CreateTaskService from './CreateTaskService';

describe('CreateTask', () => {
  it('should be able to crate a new task with To do status', async () => {
    const fakeTasksRepository = new FakeTasksRepository();
    const createTask = new CreateTaskService(fakeTasksRepository);

    const task = await createTask.execute({
      title: 'Título',
      description: 'Descrição',
      status: 'To do',
    });

    expect(task).toHaveProperty('id');
    expect(task.status).toBe('To do');
  })

  it('should be able to crate a new task with In progress status', async () => {
    const fakeTasksRepository = new FakeTasksRepository();
    const createTask = new CreateTaskService(fakeTasksRepository);

    const task = await createTask.execute({
      title: 'Título',
      description: 'Descrição',
      status: 'In progress',
    });

    expect(task).toHaveProperty('id');
    expect(task.status).toBe('In progress');
  })

  it('should be able to crate a new task with Done status', async () => {
    const fakeTasksRepository = new FakeTasksRepository();
    const createTask = new CreateTaskService(fakeTasksRepository);

    const task = await createTask.execute({
      title: 'Título',
      description: 'Descrição',
      status: 'Done',
    });

    expect(task).toHaveProperty('id');
    expect(task.status).toBe('Done');
  })

  it('should be able to crate a new task with Archive status', async () => {
    const fakeTasksRepository = new FakeTasksRepository();
    const createTask = new CreateTaskService(fakeTasksRepository);

    const task = await createTask.execute({
      title: 'Título',
      description: 'Descrição',
      status: 'Archive',
    });

    expect(task).toHaveProperty('id');
    expect(task.status).toBe('Archive');
  })
})
