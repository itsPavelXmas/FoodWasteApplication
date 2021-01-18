'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('Prospects',{
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
        type:Sequelize.STRING(255),
        allowNull:false
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        defaultValue:null
      },
      createdAt:{
        type:Sequelize.DATE
       },
      updatedAt:{
        type:Sequelize.DATE
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Prospects");
  }
};
