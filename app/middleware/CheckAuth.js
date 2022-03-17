require('dotenv').config()
const jwt = require('jsonwebtoken')

const { checkIfTokenExist } = require(__root_path+'app/repository/Authentication/personal_access_token')
const server_response = require(__root_path+'app/util/response')


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        return checkIfTokenExist(token)
            .then(response => {
                if (response) {
                    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
                    req.auth = decode
                    next();
                } else {
                    server_response(res, 401, 'Failed', 'Unauthrized')
                }
            })
            .catch(error => server_response(res, 401, 'Failed', 'Unauthrized'))

    } catch (error) {
        server_response(res, 401, 'Failed', 'Unauthrized')
    }
}