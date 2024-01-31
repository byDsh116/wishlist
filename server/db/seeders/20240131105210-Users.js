'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'Joh_Doe@lol.com',
          username: 'JohnDoe',
          password: 'JohnDoe111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'oneone@.lolcom',
          username: 'oneone',
          password: 'oneone',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'kandibober-kurva@.lolcom',
          username: 'kandibober',
          password: 'kandibober',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
