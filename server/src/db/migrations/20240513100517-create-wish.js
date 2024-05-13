'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wishes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      wishName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      wishDescription: {
        type: Sequelize.STRING,
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'Rooms' }, key: 'id' },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Wishes');
  },
};
