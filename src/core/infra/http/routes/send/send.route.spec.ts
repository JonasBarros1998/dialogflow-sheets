import request from 'supertest';
const baseUrl = 'http://localhost:3333';
const requestSupertest = request(baseUrl);

describe('routes: /send/*', function() {
  it('response success | route: /send', async function() {
    const success = await requestSupertest.get('/send');
    expect(success.body).toEqual(
        expect.objectContaining({
          message: 'route: /send/google-sheets',
        },
        ),
    );
  });
  it('success status code 200 | route: /send', async function() {
    const statuscode = await requestSupertest.get('/send');
    expect(statuscode.status).toEqual(200);
  });
  it('status code 404 | route: /send/google-sheet', async function() {
    const statuscode = await requestSupertest.get('/send/google-sheet');
    expect(statuscode.status).toEqual(404);
  });
});

