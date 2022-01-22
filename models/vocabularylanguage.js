'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VocabularyLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  VocabularyLanguage.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    body: DataTypes.STRING,
    description: DataTypes.STRING,
    featured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'VocabularyLanguage',
  });
  return VocabularyLanguage;
};