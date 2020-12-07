const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql://root:paROla2683@localhost:3306/FoodWasteDb');

module.exports = sequelize;
global.sequelize = sequelize;