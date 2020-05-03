import { RouterContext, Status } from "https://deno.land/x/oak/mod.ts"
import { client } from "./client.ts"

export const writeMetricsSet = async (ctx: RouterContext) => {
  if (!ctx.request.hasBody) {
    ctx.throw(Status.BadRequest, "Bad Request")
  }

  try {
    const values = await ctx.request.body().value

    await client.connect()

    const res = await client.query(
      "INSERT INTO metrics VALUES (nextval('metrics_id_seq'), $1, $2, $3, $4, $5, $6, $7) RETURNING id",
      values.datetime,
      values.t1,
      values.t2,
      values.t3,
      values.h1,
      values.h2,
      values.p1,
    )

    await client.end()

    ctx.response.body = {
      msg: "Metrics was writen",
      metricsSetId: res.rows[0][0],
    }
  } catch (err) {
    ctx.response.status = 500
    ctx.response.body = { msg: err.message }
  }
}
