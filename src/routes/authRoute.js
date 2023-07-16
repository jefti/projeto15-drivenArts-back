import { Router } from "express";
import { userSchemaValidation, registerSchemaValidation } from "../middlewares/userSchemaValidationMiddleware.js";
import { signin, signup, ping, getUsers, signOut, sessoes } from "../controllers/authController.js";
import { tokenValidate } from "../middlewares/tokenValidationMiddleware.js";


const authRouter = Router()
authRouter.post("/sign-in", userSchemaValidation, signin)
authRouter.get("/sign-in")

authRouter.delete("/log-out",tokenValidate, signOut )

authRouter.post("/signup", registerSchemaValidation,signup )
authRouter.get("/users",getUsers )

authRouter.post("/sessoes", sessoes)
authRouter.get("/ping", ping)

export default authRouter