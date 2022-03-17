const { PersonalAccessToken } = require('./../../models');

/**
 * 
 * @param {String} token 
 * @param {Integer} user_id 
 * @returns {Promise}
 */
const createOrUpdateToken = (token, user_id) => {
    return PersonalAccessToken
        .findOne({ where: { user_id: user_id } })
        .then((obj) => {
            // update
            if (obj) return obj.update({ token });
            // insert
            return PersonalAccessToken.create({ user_id, token });
        })
}

/**
 * 
 * @param {String} token 
 * @returns {Promise}
 */
const checkIfTokenExist = (token) => {
    return PersonalAccessToken.findOne({where: {token}})
}

module.exports = {
    createOrUpdateToken,
    checkIfTokenExist
}