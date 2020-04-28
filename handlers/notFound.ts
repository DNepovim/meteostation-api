import { Response } from "https://denopkg.com/Soremwar/oak@v0.41/mod.ts"

export default ({ response }: { response: Response }) => {
  response.status = 404
  response.body = { msg: "Not Found" }
}
