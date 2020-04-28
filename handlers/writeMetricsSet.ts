import { Request, Response } from "https://denopkg.com/Soremwar/oak@v0.41/mod.ts"
import { writeMetrics } from "../services/metrics.ts"

export default async ({
  request,
  response
}: {
  request: Request
  response: Response
}) => {

  if (!request.hasBody) {
    response.status = 400
    response.body = { msg: "Invalid metrics data" }
    return
  }

  const {
    value: { datetime, t1, t2, t3, h1, h2, p1 }
  } = await request.body()


  const metricsSetId = await writeMetrics({ datetime, t1, t2, t3, h1, h2, p1 })

  response.body = { msg: "Metrics was writen", metricsSetId }
}
