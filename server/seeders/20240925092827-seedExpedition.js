'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/expeditions.json").map((item) => {
      delete item.id;
      item.createdAt = item.updatedAt = new Date();
      return item
    })

    await queryInterface.bulkInsert('Expeditions', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Expeditions', null, {});
  }
};
