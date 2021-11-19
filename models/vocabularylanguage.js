'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vocabularyLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vocabularyLanguage.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    description: DataTypes.STRING,
    featured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'vocabularyLanguage',
  });
  return vocabularyLanguage;
};