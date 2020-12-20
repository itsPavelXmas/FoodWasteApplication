const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql://root:test@localhost:3306/FoodWasteDb');

module.exports = sequelize;
global.sequelize = sequelize;