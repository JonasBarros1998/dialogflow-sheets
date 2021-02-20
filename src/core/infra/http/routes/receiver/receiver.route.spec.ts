import request from 'supertest';

const receiverRequest = request('http://localhost:3333');

describe('test router receiver/*', function() {
  it('success status code 200 | route: /send', async function() {
    const statuscode = await receiverRequest.get('/receiver');
    expect(statuscode.status).toEqual(200);
  });
  it('success | router /receive', async function() {
    const getReceiver = await receiverRequest.get('/receive');
    expect(getReceiver.status).toEqual(404);
  });
});
