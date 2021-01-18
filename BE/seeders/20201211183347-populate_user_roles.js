'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('roles', [{
        description: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        description: 'Moderator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'CategoryManager',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
