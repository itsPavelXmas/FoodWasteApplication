'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     queryInterface.createTable("roles",{
    
      id:{
          type:Sequelize.INTEGER,
          allowNull:false,
          autoIncrement: true,
          primaryKey: true
      },
      description:{
          type:Sequelize.STRING(30),
          allowNull:false
      },
      creareturntedAt:{
        type:Sequelize.DATE
       },
      updatedAt:{
        type:Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("categories");
  }
};
