const server_response = require(__root_path+'app/util/response')


module.exports = (req, res, next, schema) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        const errorArr = []
        error.details.map(err => errorArr.push({[err.context.label]: err.message.replace(/['"]+/g, '')}))
        server_response(res, 422, 'Failed', errorArr)
    } else {
        next();
    }
}