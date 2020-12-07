const Sequelize=require("sequelize");
const sequelize=require('../database/connection');

module.exports=sequelize.define("Request", {

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

        userId:{
            type:Sequelize.INTEGER,
            allowNull:false
        },

        quantity:{
            type:Sequelize.FLOAT,
            allowNull:false
        },

        location:{
            type:Sequelize.STRING(50),
            allowNull:false
        }



})