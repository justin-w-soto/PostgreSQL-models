const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crud routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTS a character into the database', async () => {
    return request(app)
      .post('/api/v1/character')
      .send({id: '1', name: 'Rick Sanchez'})
      .then(res => {
        expect(res.body).toEqual({id: '1', name: 'Rick Sanchez'});
      });
  });



 
  // it('should GET all characters from the table', async () => {
  //   const res = await request(app)
  //         .get('/api/v1/character/');
  //     expect(res.body).toEqual([{ id: '1', name: 'Rick Sanchez' }]);
  // })
  afterAll(() => {
    pool.end();
  });
});