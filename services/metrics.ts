import { MetricsSet } from "../models/metricsSet.ts"
import { client } from "../db/client.ts"

type MetricsSetData = Omit<MetricsSet, "id">

export const writeMetrics = async (metricsSetData: MetricsSetData): Promise<string> => {

  await client.connect()

  const res = await client.query("INSERT INTO metrics VALUES (nextval('metrics_id_seq'), $1, $2, $3, $4, $5, $6, $7) RETURNING id", metricsSetData.datetime, metricsSetData.t1, metricsSetData.t2, metricsSetData.t3, metricsSetData.h1, metricsSetData.h2, metricsSetData.p1)

  await client.end()

  return res.rows[0][0]
}
