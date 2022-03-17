const bcrypt = require('bcrypt')

//Library
const { generateToken } = require(__root_path+'app/library/jwt')

//Repositroy
const { getSingleUser } = require(__root_path+'app/repository/Authentication/auth')
const { createOrUpdateToken } = require(__root_path+'app/repository/Authentication/personal_access_token')
const user_resource = require(__root_path+'app/resources/User/user_resource');
const server_response = require(__root_path+'app/util/response')


/**
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {Object}
 */
exports.user_login = (req, res, next) => {
	// Check if user exist or not
    return getSingleUser(req.body.email)
        .then(user => {
            if (user === null) return server_response(res, 401, 'Failed', 'User does not exist')
			// Comparing user password
            bcrypt.compare(req.body.password, user.password, (err, data) => {
				// Throw error if compare method unable to proceess 
                if (err) server_response(res, 500, 'Failed', 'Something went wrong', { error: err })
				
				// If Password match It will generate a new token save it on database and return the user details with token
                if (data) {  
                    const token = generateToken(user);
                    const tokenStatus = createOrUpdateToken(token, user.id)
                    return tokenStatus
                        .then(result => {                           
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
				// Throw error if password does not match
                server_response(res, 500, 'Failed', 'Password does not match')
            })
        }).catch(err => server_response(res, 500, 'Failed', 'Something went wrong', { error: err }));
}

/**
 * 
 * @returns {Object}
 */
exports.user_logout = (req, res, next) => {
    return createOrUpdateToken(0, req.auth.id)
        .then(result => server_response(res, 200, 'Success', 'Success'))
        .catch(err => server_response(res, 500, 'Failed', 'Something went wrong', { error: err }))
}