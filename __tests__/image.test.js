const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crud routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should POST an image url to the table', async () => {
    const imageObject = {
    id: 1,  
    name: expect.any(String)
    };
   
  await request(app).post('/api/v1/character/avatar').send(imageObject);
  
  })

  // it('should GET all image urls from the table', async () => {
  //   const res = await request(app)
  //         .get('/api/v1/character/avatar/');
  //     expect(res.body).toEqual([{ id: '1', url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' }]);
  // })
  afterAll(() => {
    pool.end();
  });
});