'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senderName: {
        type: Sequelize.STRING
      },
      senderAddress: {
        type: Sequelize.STRING
      },
      receiverName: {
        type: Sequelize.STRING
      },
      receiverAddress: {
        type: Sequelize.STRING
      },
      deliveryDate: {
        type: Sequelize.DATE
      },
      expeditionId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Packages');
  }
};