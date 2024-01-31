'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Wishes',
      [
        {
          ownerId: 3,
          title: 'хочу чиназес',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 1,
          title: 'хочу сантрес',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          title: 'хочу панду',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Wishes', null, {});
  },
};
