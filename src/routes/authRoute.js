import { Router } from "express";
import { userSchemaValidation } from "../middlewares/userSchemaValidationMiddleware.js";
import { signin } from "../controllers/authController.js";


const authRouter = Router()
authRouter.post("/sign-in", userSchemaValidation, signin)
authRouter.get("/sign-in")

export default authRouter