'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpanishClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SpanishClass.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    description: DataTypes.STRING,
    featured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SpanishClass',
  });
  return SpanishClass;
};