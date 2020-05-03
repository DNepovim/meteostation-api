export const DATABASE_URL = Deno.env.get("DATABASE_URL") || undefined
export const APP_HOST = Deno.env.get("HOST") || "0.0.0.0"
export const APP_PORT = Deno.env.get("PORT") || 4000
export const DB_USER = Deno.env.get("DB_USER") || "meteo"
export const DB_DATABASE = Deno.env.get("DB_DATABASE") || "meteo"
export const DB_HOST = Deno.env.get("DB_HOST") || "localhost"
export const DB_PORT = Deno.env.get("DB_PORT") || "5445"
export const DB_PASSWORD = Deno.env.get("DB_PASSWORD") || "meteo"
