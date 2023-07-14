import Joi from "joi"

export const produtoSchema = Joi.object({
    nome: Joi.string().min(3).required(),
    preco: Joi.number().positive().precision(2).required(),
    estoque: Joi.number().integer().positive().required(),
    categoria: Joi.string().valid('quadro','escultura','ilustracao').required(),
    foto: Joi.string().required(),
})