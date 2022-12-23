import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  status!: string;

  @ManyToOne(() => User, () => Task, { eager: true })
  @JoinColumn({ name: 'user' })
  user?: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

export default Task;
