import SendGoogleSheets from './SendGoogleSheets';
import GoogleAuthentication from '../authentication/GoogleAuthentication';
import env from '../../../env.json';

describe('send datas google sheets', function() {
  it('send datas', async function() {
    const googleAuthentication = new GoogleAuthentication();
    const googleAuth = googleAuthentication.auth();
    const googleSheets = {
      values: [
        ['nome: Jonas florencio de barros, telefone: (00)90000-1111'],
      ],
      range: 'A1',
      spreadsheetId: env.sheet.spreadsheet_id,
      majorDimension: 'ROWS',
      valueInputOption: 'RAW',
    };

    const sendGoogleSheets = new SendGoogleSheets(googleAuth, googleSheets);
    const {data} = await sendGoogleSheets.send();
    expect(data).toEqual(
        expect.objectContaining({
          spreadsheetId: expect.any(String),
          tableRange: expect.any(String),
          updates: expect.objectContaining({
            spreadsheetId: expect.any(String),
            updatedRange: expect.any(String),
            updatedRows: expect.any(Number),
            updatedColumns: expect.any(Number),
            updatedCells: expect.any(Number),
          }),
        }),
    );
  });
});
