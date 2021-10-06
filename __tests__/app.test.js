const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crud routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should POST a character to the table', async () => {
    const charObject = {
    id: 1,  
    name: expect.any(String)
    };
   
  await request(app).post('/api/v1/character').send(charObject);
  
  })

//   it('should GET all characters from the table', () => {
//     return request(app)
//     .get('/api/v1/character/')
//     .then(res => {
//       expect(res.body).toEqual([{ id:'1', name:'Rick Sanchez'}]);
//     });
//   })
  afterAll(() => {
    pool.end();
  });
});