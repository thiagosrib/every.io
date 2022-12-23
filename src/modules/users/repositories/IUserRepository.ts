import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined | null>;
  findByEmail(email: string): Promise<User | undefined | null>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
