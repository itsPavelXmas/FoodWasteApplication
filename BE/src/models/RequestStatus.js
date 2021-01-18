const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("lt_request_statuses", {

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