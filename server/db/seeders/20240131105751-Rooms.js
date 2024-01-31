'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Rooms',
      [
        {
          ownerId: 1,
          name: 'JohnDoe',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          name: 'JohnDoe2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          name: 'JohnDoe3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Rooms', null, {});
  },
};
