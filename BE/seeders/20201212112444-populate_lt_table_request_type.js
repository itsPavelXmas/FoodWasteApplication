'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('lt_request_type', [{
        description: 'Donation',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        description: 'Request',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('lt_request_type', null, {});
  }
};
