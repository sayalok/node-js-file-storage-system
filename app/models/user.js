'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        }
    } User.init({
        username: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: DataTypes.STRING,
        email_verified: DataTypes.BOOLEAN,
        avatar: DataTypes.STRING,
        status: DataTypes.BOOLEAN

    }, {
        sequelize, 
        modelName: 'User',
        tableName:'users'
    });
    return User;
};
