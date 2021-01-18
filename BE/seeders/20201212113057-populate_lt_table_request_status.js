'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('lt_request_statuses', [{
        description: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        description: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Picked',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Refused',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('lt_request_statuses', null, {});
  }
};
