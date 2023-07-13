import Joi from "joi"

export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().min(3).required()
})

export const signupSchema = Joi.object({
    nome: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    foto: Joi.string().required(),
    senha: Joi.string().min(3).required(),
    telefone: Joi.string().length(11).pattern(/^[0-9]+$/).required()
})