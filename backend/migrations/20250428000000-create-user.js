'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull:      false,
        autoIncrement:  true,
        primaryKey:     true,
        type:           Sequelize.INTEGER
      },
      name: {
        type:           Sequelize.STRING,
        allowNull:      false
      },
      email: {
        type:           Sequelize.STRING,
        allowNull:      false,
        unique:         true
      },
      createdAt: {
        allowNull:      false,
        type:           Sequelize.DATE,
        defaultValue:   Sequelize.fn('now')
      },
      updatedAt: {
        allowNull:      false,
        type:           Sequelize.DATE,
        defaultValue:   Sequelize.fn('now')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
