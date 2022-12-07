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
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Inglorious Basterds',
        description: 'dope film, do not watch on first date',
        image: 'https://www.imdb.com/title/tt0361748/mediaviewer/rm3163035648/?ref_=tt_ov_i',
        releaseYear: 2009,
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter and the Constant Peril',
        description: 'the books were better',
        image: 'https://www.imdb.com/title/tt0241527/mediaviewer/rm2105413120/?ref_=tt_ov_i',     
        releaseYear: 2001,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: 'Point Break',
        description: 'good. Just, really good.',
        image: 'https://www.imdb.com/title/tt0102685/mediaviewer/rm1454182656/?ref_=tt_ov_i',
        releaseYear: 1991,
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: 'Grosse Point Blank',
        description: 'good 90s film if you like Cusack',
        image: 'https://www.imdb.com/title/tt0119229/mediaviewer/rm1911760128/?ref_=tt_ov_i',
        releaseYear: 1997,
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Die Hard',
        description: 'The best Christmas Movie',
        image: 'https://www.imdb.com/title/tt0095016/mediaviewer/rm270892032/?ref_=tt_ov_i',
        releaseYear: 1988,
        genre_id: 5,
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
