const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("users", {

    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    email:{
        type:Sequelize.STRING(30),
        allowNull:true,
        unique:true
    },
    cnp:{
        type:Sequelize.STRING(13),
        allowNull:true,
        unique:true
    },
    name:{
        type:Sequelize.STRING(50),
        allowNull:true
    },
    surrname:{
        type:Sequelize.STRING(50),
        allowNull:true
    },
    address:{
        type:Sequelize.STRING(50),
        allowNull:true
    },
    series:{
        type:Sequelize.STRING(50),
        allowNull:true,
        unique:true
    },
    roleId:{
        type:Sequelize.INTEGER,
        allowNull:true,
    }
})