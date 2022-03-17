require('dotenv').config()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        user_role: user.role_id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: "24h"
    }, )
}

const generateHashPassword = (pass) => {
    const salt = bcrypt.genSalt(10);
	return salt.then((res)=>{
			const password = bcrypt.hash(pass,res);
		return password.then((response)=>{
			return response;
			}).catch((error)=>{
			return false;
			})
		})
}

module.exports = {
    generateToken,
    generateHashPassword
}