const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crud routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should POST an episode to the table', async () => {
    const episodeObject = {
    id: 1,  
    name: 'Pilot'
    };
   
  const response = await request(app).post('/api/v1/episode').send(episodeObject);
  expect(response.body).toEqual(episodeObject);
  
  })

//   it('should GET all locations from the table', async () => {
//     const res = await request(app)
//           .get('/api/v1/episode');
//       expect(res.body).toEqual([{ id: '1', name: 'Pilot' }]);
//   })
  afterAll(() => {
    pool.end();
  });
});