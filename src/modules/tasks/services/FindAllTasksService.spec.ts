import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import FakeTasksRepository from '../repositories/fakes/FakeTasksRepository';
import CreateTaskService from './CreateTaskService';

describe('GetTasks', () => {
  it('should be able to get all tasks', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeTasksRepository = new FakeTasksRepository();

    const createUser = new CreateUserService(fakeUsersRepository);
    const createTask = new CreateTaskService(fakeTasksRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    });

    const task = await createTask.execute({
      status: 'To do',
      userId: user.id
    });

    const tasks = await fakeTasksRepository.findAll();

    expect(tasks).not.toBeNull()
    expect(tasks?.length).toBeGreaterThan(0)
  })
})
