'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable( "Comment", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement: true, 
        primaryKey: true,
      },
      id_users: Sequelize.INTEGER(11),
      id_posts: Sequelize.INTEGER(11),
      comments: Sequelize.TEXT
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Comment");
  }
};
