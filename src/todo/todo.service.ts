import { Injectable } from '@nestjs/common';
import dataSource from '@shared/configs/data-source.config';
import { TodoDto } from './dtos';
import { TodoRepository } from './repositories';
import { UserRepository } from '../user/repositories';

@Injectable()
export class TodoService {
  constructor(
    private userRepository: UserRepository,
    private todoRepository: TodoRepository,
  ) {}

  create(todo: TodoDto) {
    console.log(todo);
    return {
      message: 'Create success',
    };
  }

  async createMany(todos: TodoDto[]) {
    const result = { message: 'Create many todos sucess' };
    const queryRunner = dataSource.createQueryRunner();
    const user = await this.userRepository.findOne({ where: { id: 1 } });
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      todos.forEach((todo) => {
        const td = this.todoRepository.create(todo);
        td.user = user;
        queryRunner.manager.save(td);
      });
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      result.message = 'Something is error!';
    } finally {
      await queryRunner.release();
    }
    return result;
  }
}
