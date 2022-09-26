import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dataSource from '@shared/configs/data-source.config';
import { getLogLevels } from '@common/utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: getLogLevels(process.env.NODE_ENV === 'production'),
  });
  await app.listen(+process.env.PORT || 3000);
  await dataSource.initialize();
}
bootstrap();
