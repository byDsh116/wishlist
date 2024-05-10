'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Wish extends Model {
    static associate(models) {}
  }
  Wish.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      roomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Wish',
    }
  );
  return Wish;
};
