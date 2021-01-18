const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("categories", {

    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    description:{
        type:Sequelize.STRING(30),
        allowNull:false
    }
})