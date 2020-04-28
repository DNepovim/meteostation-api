
import { client } from "./client.ts"

await client.connect()

await client.query(`
  CREATE TABLE metrics (
    id SERIAL PRIMARY KEY,
    datetime VARCHAR,
    t1 FLOAT,
    t2 FLOAT,
    t3 FLOAT,
    h1 FLOAT,
    h2 FLOAT,
    p1 FLOAT)
`)

await client.end()

console.log('Table was succesfuly created.')

