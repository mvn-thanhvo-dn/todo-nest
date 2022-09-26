import customNamingStrategy from '../../database/naming-strategies/custom-naming-strategy';
import { DataSource } from 'typeorm';
import { environment } from '../constants';

export default new DataSource({
  type: 'postgres',
  replication: {
    master: {
      database: environment.database.database,
      username: environment.database.username,
      password: environment.database.password,
      port: +(environment.database.port || 0),
      host: environment.database.host,
    },
    slaves: [
      {
        database: environment.database.database,
        username: environment.database.username,
        password: environment.database.password,
        port: +(environment.database.port || 0),
        host: environment.database.host,
      },
    ],
  },
  entities: [__dirname + '/../../*/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../database/migrations/*{.ts,.js}'],
  namingStrategy: customNamingStrategy,
  synchronize: false,
  // logging: false,
});
