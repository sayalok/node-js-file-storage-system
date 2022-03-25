require('dotenv').config()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

/**
 * Generating a token using user info and JWT secret key
 * 
 * @param {object} user 
 * @returns {String}
 */
const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        user_role: user.role_id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: "24h"
    })
}

module.exports = {
    generateToken
}