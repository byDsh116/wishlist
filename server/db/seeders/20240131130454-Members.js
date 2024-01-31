'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          userId: 3,
          roomId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          roomId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          roomId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Members', null, {});
  },
};
