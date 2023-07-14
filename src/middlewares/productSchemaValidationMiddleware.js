import { produtoSchema } from "../schemas/produtoSchema"

export function productSchemaValidation (req, res, next){
    const validation = produtoSchema.validate(req.body, {abortEarly: false})
    if(validation.error){
        const errors = validation.error.details.map((detail) => detail.message)
        return res.status(422).send(errors)
    }
    next()
}