import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import QuotesModel from '../lib/models/QuotesModel.js';


describe('routes to get, post, put, and delete', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POSTs a new quote to the table', async () => {
    const quote = {
      
    }
  })

  afterAll(() => {
    pool.end();
  });
});
