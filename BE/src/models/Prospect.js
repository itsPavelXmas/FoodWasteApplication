const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("Prospect", {

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
    }

})