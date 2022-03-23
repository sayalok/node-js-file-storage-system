'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class file_storage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  file_storage.init({
    user_id: DataTypes.INTEGER,
    file_name: DataTypes.STRING,
    file_size: DataTypes.FLOAT,
    pub_key: DataTypes.STRING,
    private_key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'file_storage',
  });
  return file_storage;
};