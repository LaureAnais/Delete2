const path = require('path');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: /* one of 'mysql'  */
  });

const dotenv = require('dotenv').config();