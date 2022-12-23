import FakeTasksRepository from '../repositories/fakes/FakeTasksRepository';
import CreateTaskService from './CreateTaskService';

describe('UpdateTask', () => {
  it('should be able to update task status to In Progress', async () => {
    const fakeTasksRepository = new FakeTasksRepository();

    const createTask = new CreateTaskService(fakeTasksRepository);

    const task = await createTask.execute({
      status: 'To do'
    });

    const updatedTask = await fakeTasksRepository.updateStatus(task.id, 'In Progress');

    expect(updatedTask).not.toBeNull()
    expect(updatedTask?.status).toBe('In Progress')
  })

  it('should be able to update task status to Done', async () => {
    const fakeTasksRepository = new FakeTasksRepository();

    const createTask = new CreateTaskService(fakeTasksRepository);

    const task = await createTask.execute({
      status: 'To do'
    });

    const updatedTask = await fakeTasksRepository.updateStatus(task.id, 'Done');

    expect(updatedTask).not.toBeNull()
    expect(updatedTask?.status).toBe('Done')
  })

  it('should be able to update task status to Archived', async () => {
    const fakeTasksRepository = new FakeTasksRepository();

    const createTask = new CreateTaskService(fakeTasksRepository);

    const task = await createTask.execute({
      status: 'To do'
    });

    const updatedTask = await fakeTasksRepository.updateStatus(task.id, 'Archived');

    expect(updatedTask).not.toBeNull()
    expect(updatedTask?.status).toBe('Archived')
  })
})
