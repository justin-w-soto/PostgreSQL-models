const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crud routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should save a character to the table', async () => {
    const charObject = {
    id: 1,  
    name: expect.any(String)
    };
   
  await request(app).post('/api/v1/character').send(charObject);
  
  })

  afterAll(() => {
    pool.end();
  });
});