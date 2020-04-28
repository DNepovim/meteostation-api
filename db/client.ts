import { Client } from "https://deno.land/x/postgres/mod.ts"
import {DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT} from "../config.ts"

export const client = new Client({
    user: DB_USER,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    password: DB_PASSWORD
  })