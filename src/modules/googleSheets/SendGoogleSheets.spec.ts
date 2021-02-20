import SendGoogleSheets from './SendGoogleSheets';
import GoogleAuthentication from '../authentication/GoogleAuthentication';

describe('send datas google sheets', function() {
  it('send datas', async function() {
    const googleAuthentication = new GoogleAuthentication();
    const googleAuth = googleAuthentication.auth();
    const googleSheets = {
      values: [
        ['jonas', 'florencio', 'barros'],
        ['monitor', 'gabinete', 'teclado'],
      ],
      range: 'A1',
      spreedSheetId: '1nrLfKR9Wac-qULzOvXUZPDPLO4Uy-gcfOCqOSz1-7B0',
      majorDimension: 'ROWS',
      valueInputOption: 'RAW',
    };

    const sendGoogleSheets = new SendGoogleSheets(googleAuth, googleSheets);
    const datas = await sendGoogleSheets.send();
    expect(datas).toEqual(
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
