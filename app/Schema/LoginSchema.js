const Joi = require('joi');
const validatorRequestHandler = require('./../../app/middleware/ValidatorRequestHandler');


const LoginSchema = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        device_id: Joi.string() 
    });
    validatorRequestHandler(req, res,next, schema);
}

module.exports = LoginSchema;

