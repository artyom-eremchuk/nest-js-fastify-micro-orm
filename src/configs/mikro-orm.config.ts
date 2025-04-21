import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import * as dotenv from 'dotenv';

dotenv.config();

const config: MikroOrmModuleOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5555', 10),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'qwerty',
  dbName: process.env.DB_NAME || 'nest-js-micro-orm',
  entitiesTs: ['./src/**/*.entity.ts'],
  entities: ['./dist/**/*.entity.js'],
  driver: PostgreSqlDriver,
};

export default config;
