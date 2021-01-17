'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Requests",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    category:{
        type:Sequelize.INTEGER,
        allowNull:false
    
    },
    requestType:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    requestStatus:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },

    quantity:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    location:{
        type:Sequelize.STRING(50),
        allowNull:false
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
    return queryInterface.dropTable("Requests");
  }
};
