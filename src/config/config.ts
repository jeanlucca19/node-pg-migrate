import { Module } from "@nestjs/common";
import { Pool } from "pg";
import { PG_CONNECTION } from '../constants';


const dbProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule { }
