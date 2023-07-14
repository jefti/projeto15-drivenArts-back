import { Router } from "express";
import { productSchemaValidation } from "../middlewares/productSchemaValidationMiddleware.js";
import { cadatraProduto } from "../controllers/productController.js";

const productRouter = Router();

productRouter.post("/produto",productSchemaValidation,cadatraProduto)

export default productRouter