'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PersonalAccessToken extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PersonalAccessToken.init({
        user_id: DataTypes.INTEGER,
        token: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'PersonalAccessToken',
        tableName: 'personal_access_tokens'
    });
    return PersonalAccessToken;
};