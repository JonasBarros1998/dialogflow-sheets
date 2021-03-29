import request from 'supertest';
import env from '../../../../../../env.json';

const url = request(`http://localhost:${env.port}`);

describe('test router /authentication', function() {
  it('status code 200', async function() {
    const statusCode = await url.get('/authentication');
    expect(statusCode.status).toEqual(200);
  });
});

describe('test router /token', function() {
  it('status code 200', async function() {
    const statusCode = await url.post('/token');
    expect(statusCode.status).toEqual(200);
  });
});
