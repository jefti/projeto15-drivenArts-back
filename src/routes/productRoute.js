import { Router } from "express";
import { productSchemaValidation } from "../middlewares/productSchemaValidationMiddleware";

const productRoute = Router();

productRoute.post("/produto",productSchemaValidation)

export default productRoute