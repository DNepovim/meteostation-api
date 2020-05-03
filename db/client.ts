import { Client } from "https://deno.land/x/postgres/mod.ts"
import {DB_USER, DB_DATABASE, DB_HOST, DB_PORT, DB_PASSWORD} from "../config.ts"

const DATABASE_URL = Deno.env("DATABASE_URL")

const conf = DATABASE_URL ?? {
    user: DB_USER,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    password: DB_PASSWORD
  }

export const client = new Client(conf)
