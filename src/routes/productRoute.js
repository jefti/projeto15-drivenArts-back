import { Router } from "express";
import { productSchemaValidation } from "../middlewares/productSchemaValidationMiddleware.js";
import { cadatraProduto, retornaTodosProdutos, retornaCategoriaProdutos, retornaProduto } from "../controllers/productController.js";
import { tokenValidate } from "../middlewares/tokenValidationMiddleware.js";

const productRouter = Router();

productRouter.post("/produto",productSchemaValidation,cadatraProduto)
productRouter.get("/produtos/todos", tokenValidate, retornaTodosProdutos)
productRouter.get("/categoria/:categoria", tokenValidate, retornaCategoriaProdutos)
productRouter.get("/produto/:id", tokenValidate, retornaProduto)

export default productRouter