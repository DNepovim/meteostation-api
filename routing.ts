import { Router } from "https://denopkg.com/Soremwar/oak@v0.41/mod.ts"

import writeMetricsSet from "./handlers/writeMetricsSet.ts"

const router = new Router()

router.post("/metrics", writeMetricsSet)

export default router
