import { Router } from "https://raw.githubusercontent.com/oakserver/oak/master/mod.ts"

import writeMetricsSet from "./handlers/writeMetricsSet.ts"

const router = new Router()

router.post("/metrics", writeMetricsSet)

export default router
