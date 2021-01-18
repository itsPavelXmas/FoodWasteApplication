'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Users",{
      id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
        email:{
        type:Sequelize.STRING(30),
        allowNull:true,
        unique:true,
        defaultValue:null
      },
        cnp:{
        type:Sequelize.STRING(13),
        allowNull:true,
        unique:true,
        defaultValue:null
      },
        name:{
        type:Sequelize.STRING(50),
        allowNull:true,
        defaultValue:null
      },
        surrname:{
        type:Sequelize.STRING(50),
        allowNull:true,
        defaultValue:null
      },
        address:{
        type:Sequelize.STRING(50),
        allowNull:true,
        defaultValue:null
      },
        series:{
        type:Sequelize.STRING(50),
        allowNull:true,
        unique:true,
        defaultValue:null
      },
      roleId:{
        type:Sequelize.INTEGER,
        allowNull:true,
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
    return queryInterface.dropTable("Users");
  }
};
