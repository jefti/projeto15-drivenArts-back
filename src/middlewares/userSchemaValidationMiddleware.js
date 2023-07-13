import { signinSchema, signupSchema } from "../schemas/userSchema.js";

export function userSchemaValidation(req, res, next) {
    const validationSignin = signinSchema.validate(req.body, { abortEarly: false })
    if (validationSignin.error) {
        const errors = validationSignin.error.details.map((detail) => detail.message)
        return res.status(422).send(errors)
    }
    next()
}

export function registerSchemaValidation(req,res,next){
    const validation = signupSchema.validate(req.body, {abortEarly: false})
    if(validation.error){
        const errors = validation.error.details.map((detail) => detail.message)
        return res.status(422).send(errors)
    }
    next()
}