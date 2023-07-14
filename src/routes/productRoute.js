import { Router } from "express";
import { productSchemaValidation } from "../middlewares/productSchemaValidationMiddleware.js";
import { cadatraProduto, retornaTodosProdutos } from "../controllers/productController.js";
import { tokenValidate } from "../middlewares/tokenValidationMiddleware.js";

const productRouter = Router();

productRouter.post("/produto",productSchemaValidation,cadatraProduto)
productRouter.get("/produtos/todos", tokenValidate, retornaTodosProdutos)

export default productRouter