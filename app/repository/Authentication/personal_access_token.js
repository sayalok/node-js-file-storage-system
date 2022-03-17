const { PersonalAccessToken } = require('./../../models');

const createOrUpdateToken = (token, user_id) => {
    return PersonalAccessToken
        .findOne({ where: { user_id: user_id } })
        .then((obj) => {
            console.log(obj);
            // update
            if (obj)
                return obj.update({ token });
            // insert
            return PersonalAccessToken.create({ user_id, token });
        })
}

const checkIfTokenExist = (token) => {
    return PersonalAccessToken.findOne({
        where: {
            token
        }
    })
}

module.exports = {
    createOrUpdateToken,
    checkIfTokenExist
}