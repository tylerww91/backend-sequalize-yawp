'use strict';
const db = require('../models');

module.exports = {
  async up (queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await db.Genre.bulkCreate([
      {
        name: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sci-fi',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'The Only Christmas Movies',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
