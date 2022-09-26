import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dtos';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @HttpCode(HttpStatus.OK)
  @Post('')
  create(@Body() todo: TodoDto) {
    return this.todoService.create(todo);
  }

  @HttpCode(HttpStatus.OK)
  @Post('many')
  createMany(@Body() todos: TodoDto[]) {
    return this.todoService.createMany(todos);
  }
}
