const Joi = require("joi")
const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false })


const signupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(12).max(100).required()
})

exports.validateSignup = validator(signupSchema)