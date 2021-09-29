import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// import CharacterModel from '../lib/models/CharacterModel.js';


describe('routes to get, post, put, and delete', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTs a new character to the data-table', async () => {
    return request(app)
      .post('/api/character')
      .then(res => {
        expect(res.body).toEqual({
          id: (expect.any(Number)),
          name: (expect.any(String)),
        })
      })
  })

  afterAll(() => {
    pool.end();
  });
});
