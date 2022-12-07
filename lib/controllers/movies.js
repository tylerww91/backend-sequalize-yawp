const { Router } = require('express');
const db = require('../models');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const movies = await db.Movies.findAll();
    console.log(db);
    res.json(movies);
  } catch (e) {
    next(e);
  }
});
