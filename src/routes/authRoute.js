import { Router } from "express";
import { userSchemaValidation, registerSchemaValidation } from "../middlewares/userSchemaValidationMiddleware.js";
import { signin, signup, ping, getUsers } from "../controllers/authController.js";


const authRouter = Router()
authRouter.post("/sign-in", userSchemaValidation, signin)
authRouter.get("/sign-in")

authRouter.post("/signup", registerSchemaValidation,signup )
authRouter.get("/users",getUsers )
authRouter.get("/ping", ping)

export default authRouter