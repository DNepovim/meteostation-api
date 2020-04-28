import { Client } from "https://deno.land/x/postgres/mod.ts"
const env = Deno.env()

export const client = new Client({
  connectionString: env.DATABASE_URL,
  ssl: true
})