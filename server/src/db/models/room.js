'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {}
  }
  Room.init(
    {
      roomName: DataTypes.STRING,
      roomDescription: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Room',
    }
  );
  return Room;
};
