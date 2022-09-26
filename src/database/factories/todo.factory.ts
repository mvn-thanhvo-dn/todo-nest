import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Todo } from '../../todo/entities';

define(Todo, () => {
  const todo = new Todo();
  todo.title = faker.random.words(2);
  todo.description = faker.lorem.word(10);
  return todo;
});
