const bcrypt = require('bcrypt')

//Library
const { generateToken } = require('./../../../library/jwt')

//Repositroy
const { getSingleUser,deviceIdUpdateOrInsert } = require('./../../../repository/Authentication/auth')
const { createOrUpdateToken } = require('./../../../repository/Authentication/personal_access_token')
const user_resource = require('./../../../resources/User/user_resource');
const server_response = require('./../../../util/response')

exports.user_login = (req, res, next) => {
    
    return getSingleUser(req.body.email,3)
        .then(user => {
            // console.log(user);
            if (user === null) {
                return server_response(res, 401, 'Failed', 'User does not exist')
            }

            // device id insert to database for a user

            bcrypt.compare(req.body.password, user.password, (err, data) => {
                if (err) {
                    server_response(res, 500, 'Failed', 'Something went wrong', { error: err })

                }
                console.log(user.id);
                if (data) {
                   
                    const token = generateToken(user);
                    const tokenStatus = createOrUpdateToken(token, user.id)
                    return tokenStatus
                        .then(result => {
                           
                            if(req.body.device_id)
                            {
                                let format = {
                                    device_id: req.body.device_id,
                                    user_id: user.id
                                }
                                // console.log(format);
                                deviceIdUpdateOrInsert(format)
                            }
                           
                            const userResource = user_resource(user)
                            server_response(
                                res, 200, 'Success!', 'Authentication Successful', {
                                    data: userResource,
                                    token: token
                                }
                            )
                        })
                        .catch(err => {
                            server_response(res, 500, 'Failed', 'Something went wrong', { error: err })
                        })
                }
                server_response(res, 500, 'Failed', 'Password does not match')
            })
        }).catch(err => {
            server_response(res, 500, 'Failed', 'Something went wrong', { error: err })

        });
}

exports.user_logout = (req, res, next) => {
    const tokenStatus = createOrUpdateToken(0, req.auth.id)
    return tokenStatus
        .then(result => {
            server_response(res, 200, 'Success', 'lgout Successful')
        })
        .catch(err => {
            server_response(res, 500, 'Failed', 'Something went wrong', { error: err })

        })
}