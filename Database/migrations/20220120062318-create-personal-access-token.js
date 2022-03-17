'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('personal_access_tokens', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users', // table name
                    key: 'id'
                }
            },
            token: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()')
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('personal_access_tokens');
    }
};