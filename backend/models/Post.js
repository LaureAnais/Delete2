
const Sequelize = require("sequelize");

module.exports = sequelize.define("Post", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement: true, 
        primaryKey: true,
    },
    id_author: Sequelize.INTEGER(11),
    picture_uploaded: Sequelize.VARCHAR(255),
    create_at: Sequelize.DATETIME,
    update_at: Sequelize.DATETIME,
    liked: Sequelize.INTEGER(11)
});
