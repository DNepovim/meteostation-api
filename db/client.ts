import { Client } from "https://deno.land/x/postgres/mod.ts"
const env = Deno.env()

export const client = new Client(env.DATABASE_URL)
