'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Rooms',
      [
        {
          name: 'Family',
          description: 'Для настоящих хоумис',
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Friends lvl 1',
          description: '',
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'For wedding',
          description: '',
          ownerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  },
};
