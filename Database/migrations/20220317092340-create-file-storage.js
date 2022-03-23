'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('file_storages', {
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
			file_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			file_size: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			pub_key: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			private_key: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('file_storages');
	}
};