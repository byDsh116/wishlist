'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wish extends Model {
    static associate(models) {}
  }
  Wish.init(
    {
      wishName: DataTypes.STRING,
      wishDescription: DataTypes.STRING,
      roomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Wish',
    }
  );
  return Wish;
};
