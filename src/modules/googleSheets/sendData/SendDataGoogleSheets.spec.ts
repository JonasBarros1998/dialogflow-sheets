import SendDataGoogleSheets from './SendDataGoogleSheets';
import env from '../../../../env.json';

describe('class SendDataGoogleSheets', function() {
  const data = {
    range: 'A1',
    spreadsheetId: env.sheet.spreadsheet_id,
    valueInputOption: 'RAW',
    requestBody: {
      majorDimension: 'ROWS',
      values: [
        ['nome: jonas, telefone: (00) 900000-1111'],
      ],
    },
  };
  it('return a object from sucess when sending dates google sheets', async function() {
    const sendDataGoogleSheets = new SendDataGoogleSheets(data);
    await sendDataGoogleSheets.sendData()
        .then(function(response) {
          expect(response).toEqual(
              expect.objectContaining({
                status: expect.any(Number),
                data: expect.any(Object),
              }),
          );
        });
  });

  it('return a object from error when sending dates google sheets', async function() {
    const sendDataGoogleSheets = new SendDataGoogleSheets(data);
    await sendDataGoogleSheets.sendData()
        .catch(function(error) {
          expect(error).toEqual(
              expect.objectContaining({
                code: expect.any(Number),
                errors: expect.any(Object),
                response: {
                  statusText: expect.any(String),
                },
              }),
          );
        });
  });
});
