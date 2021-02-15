import request from 'supertest';

const receiverRequest = request('http://localhost:3333');

describe('test router receiver/*', function() {
  it('success | router /receiver', async function() {
    const getReceiver = await receiverRequest.get('/receiver');
    expect(getReceiver.body).toEqual(
        expect.objectContaining({
          message: 'route: /receiver',
        }),
    );
  });
  it('success | router /receive', async function() {
    const getReceiver = await receiverRequest.get('/receive');
    expect(getReceiver.status).toEqual(404);
  });
});
