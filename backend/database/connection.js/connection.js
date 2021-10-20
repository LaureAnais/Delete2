const Sequelize = require("sequelize");

const sequelize = new Sequelize("groupomania_chat", 'projet7Admin', 'OC!LastOne11', { 
    host: '127.0.0.1', 
    dialect: "mysql", 
    operatorsAliases:false});

module.exports = sequelize;
global.sequelize = sequelize;