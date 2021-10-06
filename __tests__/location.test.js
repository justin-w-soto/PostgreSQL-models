const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crud routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should POST a location to the table', async () => {
    const locationObject = {
    id: 1,  
    name: expect.any(String)
    };
   
  await request(app).post('/api/v1/location').send(locationObject);
  
  })

//   it('should GET all locations from the table', async () => {
//     const res = await request(app)
//           .get('/api/v1/location');
//       expect(res.body).toEqual([{ id: '1', name: 'Earth' }]);
//   })
  afterAll(() => {
    pool.end();
  });
});