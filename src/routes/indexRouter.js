import { Router } from "express";
import authRouter from "./authRoute.js";
import productRouter from "./productRoute.js";

const router = Router()
router.use(authRouter)
router.use(productRouter)

export default router