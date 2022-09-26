import { Module } from '@nestjs/common';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoRepository } from './repositories/todo.repository';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
