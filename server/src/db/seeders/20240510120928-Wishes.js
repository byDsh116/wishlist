'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Wishes',
      [
        {
          name: 'Работу в интересном проекте',
          description: 'Оплата веточками принимается',
          roomId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Протеиновые печеньки',
          description: 'flap jack шоколадный',
          roomId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Первый взнос по ипотеке',
          description: 'маленькая зато своя',
          roomId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wishes', null, {});
  },
};
