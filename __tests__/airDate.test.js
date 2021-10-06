const pool = require('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');


describe('crud routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should POST an airdate to the table', async () => {
    const airDateObj = {
    id: 1,  
    air_date: 'December 2, 2013'
    };
   
  await request(app).post('/api/v1/airdate').send(airDateObj);
  
  })

  // it('should GET all air dates from the table', async () => {
  //   const res = await request(app)
  //         .get('/api/v1/airdate');
  //     expect(res.body).toEqual([{ id: '1', air_date: 'December 2, 2013' }]);
  // })
  afterAll(() => {
    pool.end();
  });
});