const request = require('supertest')
const app = require('../../../app')
describe('Health endpoints', () => {
  it('should get status', async () => {
    const res = await request(app)
      .get('/health/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body.status).toEqual('UP');
  })
})