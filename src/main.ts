import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Client } from 'pg';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const client = new Client({
    user: 'pg-docker',
    password: 'docker',
    host: 'localhost',
    port: 5432,
    database: 'pg-docker',
  });
  client.connect()
  await app.listen(3000);
}
bootstrap();
