import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../user/entities';
import { Todo } from '../../todo/entities';

export default class InitialDatabaseSeed implements Seeder {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async run(factory: Factory, _connection: Connection): Promise<void> {
    const users = await factory(User)().createMany(10);
    await factory(Todo)()
      .map(async (todo) => {
        todo.user = users[Math.floor(Math.random() * users.length)];
        return todo;
      })
      .createMany(10);
  }
}
