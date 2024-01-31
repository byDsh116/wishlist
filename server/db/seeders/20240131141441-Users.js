'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'John@Doe.lo',
          username: 'John',
          password: 'Johndo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'chinazes@lala.com',
          username: 'chinazes',
          password: 'chinazes',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'saaayndtres@lala.com',
          username: 'saaayndtres',
          password: 'saaayndtres',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
