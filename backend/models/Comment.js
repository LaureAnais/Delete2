
const Sequelize = require("sequelize");

module.exports = sequelize.define("Comment", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement: true, 
        primaryKey: true,
    },
    content: Sequelize.STRING(300),

});

// Ce n'est pas un id mais content avec un type .TEXT et un validate sur le type