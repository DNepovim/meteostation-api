import { Router } from "https://deno.land/x/oak/mod.ts"
import { writeMetricsSet } from "./controller.ts"

const router = new Router()
router.post("/metrics", writeMetricsSet)

export default router
