import { Response } from "https://denopkg.com/Soremwar/oak@v0.41/mod.ts"

export default async (
  { response }: { response: Response },
  next: () => Promise<void>
) => {
  try {
    await next()
  } catch (err) {
    response.status = 500
    response.body = { msg: err.message }
  }
}
