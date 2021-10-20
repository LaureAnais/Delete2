const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement: true, 
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true,
          is: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        }
    },
    pseudo: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique: true,
        validate: {
            is: /^[a-z]+$/i,
            notEmpty: true,
            len: [2,30]
          }
    },
    password: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }, 

    profile_picture: {
        type: Sequelize.STRING,
    },

    id_roles: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});