'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wish extends Model {
    static associate(models) {}
  }
  Wish.init(
    {
      ownerId: DataTypes.INTEGER,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Wish',
    }
  );
  return Wish;
};
