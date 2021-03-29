/* eslint-disable max-len */
import request from 'supertest';
import env from '../../../../../../env.json';


const baseUrl = `http://localhost:${env.port}`;
const requestSupertest = request(baseUrl);

describe('routes: /send/*', function() {
  it('success status code 200 | route: /send', async function(done) {
    const statuscode = await requestSupertest.post('/send')
        .send(
            {
              'queryResult': {
                'queryText': 'nome: Jonas florencio de barros, telefone: (00)90000-1111',
                'range': 'A1',
                'spreadsheetId': env.sheet.spreadsheet_id,
                'majorDimension': 'ROWS',
                'valueInputOption': 'RAW',
              },
            },
        );
    expect(statuscode.status).toEqual(200);
    return done();
  });

  it('status code 404 | route: /send/google-sheet', async function() {
    const statuscode = await requestSupertest.get('/send/google-sheet');
    expect(statuscode.status).toEqual(404);
  });
});

