const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql://root:asteroid1#@localhost:3306/FoodWasteDb');

module.exports = sequelize;
global.sequelize = sequelize;