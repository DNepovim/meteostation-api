import { Response } from "https://raw.githubusercontent.com/oakserver/oak/master/mod.ts"

export default ({ response }: { response: Response }) => {
  response.status = 404
  response.body = { msg: "Not Found" }
}
