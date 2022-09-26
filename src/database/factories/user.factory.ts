import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { User } from '../../user/entities';

define(User, () => {
  const user = new User();
  user.email = faker.internet.email();
  user.password = faker.random.word();
  return user;
});
