const Sequelize = require("sequelize");
<<<<<<< HEAD

const sequelize = new Sequelize('mysql://root:test@localhost:3306/FoodWasteDb');
=======
const config = require('../../config/config.json')
const sequelize = new Sequelize(config.development.database,config.development.username,config.development.password,{
    host:config.development.host,
    port:config.development.port,
    dialect:config.development.dialect
});
>>>>>>> 1d146c11b0e94c72385da64257f2f2df89b5819c

module.exports = sequelize;
global.sequelize = sequelize;