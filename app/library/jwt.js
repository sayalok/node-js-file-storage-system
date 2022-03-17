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
    // console.log(pass);
    // return bcrypt.hash(pass, 10, (err, hash) => {
        // if (err) {
        //     console.log(err);
        //     return '123456'
        // } else {
    //         // console.log(hash);
    //         return hash;
    //     // }
    // })
    // return pass;
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

// // else {
// bcrypt.hash('123456', 10, (err, hash) => {
//     if (err) {
//         return res.status(500).json({error: err})
//     } else {
//         console.log(hash);
//     }
// })
// // }

module.exports = {
    generateToken,
    generateHashPassword
}