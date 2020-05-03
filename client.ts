import { Client } from "https://deno.land/x/postgres/mod.ts"
import {
  DATABASE_URL,
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.ts"

const conf = DATABASE_URL ?? {
  user: DB_USER,
  database: DB_DATABASE,
  host: DB_HOST,
  port: parseInt(DB_PORT),
  password: DB_PASSWORD,
}

export const client = new Client(conf)
