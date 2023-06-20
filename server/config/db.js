import { createPool } from "mysql2/promise";
import 'dotenv/config'

export const pool = createPool({
  host: "localhost",
  port: 3306,
  user: process.env.USER_SQL,
  password: process.env.PWD_SQL,
  database: process.env.DB_SQL
});

pool.query;
