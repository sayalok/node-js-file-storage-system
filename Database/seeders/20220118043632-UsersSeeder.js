'use strict';
const { generateHashPassword } = require('./../../app/library/jwt')
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [{
            username: "Admin",
            email: 'admin@test.com',
            password: '$2b$10$HncM2eqNcFP0y6ADOxI3Xu29d32qSF.3gS/mKSuMPgsSZH/NZGkki',
            status: 1,
        },{
            username: "user",
            email: 'user@test.com',
            password: '$2b$10$HncM2eqNcFP0y6ADOxI3Xu29d32qSF.3gS/mKSuMPgsSZH/NZGkki',
            status: 1,
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};