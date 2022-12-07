const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('movies routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Movie.bulkCreate([
        {
          title: 'Inglorious Basterds',
          description: 'dope film, do not watch on first date',
          image:
            'https://www.imdb.com/title/tt0361748/mediaviewer/rm3163035648/?ref_=tt_ov_i',
          releaseYear: 2009,
          genre_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Harry Potter and the Constant Peril',
          description: 'the books were better',
          image:
            'https://www.imdb.com/title/tt0241527/mediaviewer/rm2105413120/?ref_=tt_ov_i',
          releaseYear: 2001,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Point Break',
          description: 'good. Just, really good.',
          image:
            'https://www.imdb.com/title/tt0102685/mediaviewer/rm1454182656/?ref_=tt_ov_i',
          releaseYear: 1991,
          genre_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Grosse Point Blank',
          description: 'good 90s film if you like Cusack',
          image:
            'https://www.imdb.com/title/tt0119229/mediaviewer/rm1911760128/?ref_=tt_ov_i',
          releaseYear: 1997,
          genre_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Die Hard',
          description: 'The best Christmas Movie',
          image:
            'https://www.imdb.com/title/tt0095016/mediaviewer/rm270892032/?ref_=tt_ov_i',
          releaseYear: 1988,
          genre_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  it.only('GET /api/v1/movies should return a list of movies', async () => {
    const resp = await request(app).get('/api/v1/movies');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(5);
  });
});
