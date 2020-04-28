const env = Deno.env()

export const APP_HOST = env.APP_HOST || "127.0.0.1"
export const APP_PORT = env.APP_PORT || 4000
export const DB_USER = env.DB_USER || "meteo"
export const DB_DATABASE = env.DB_DATABASE || "meteo"
export const DB_HOST = env.DB_HOST || "localhost"
export const DB_PORT = env.DB_PORT || "5445"
export const DB_PASSWORD = env.DB_PASSWORD || "meteo"
