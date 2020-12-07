'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Prospect",{
      id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
      email:{
        type:Sequelize.STRING(30),
        allowNull:false
      },
      password:{
        type:Sequelize.STRING(50),
        allowNull:false
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull:true
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE

   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Prospect");
  }
};
