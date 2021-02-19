import SendGoogleSheets from './SendGoogleSheets';
import GoogleAuthentication from '../authentication/GoogleAuthentication';

describe('send datas google sheets', function() {
  it('send datas', async function() {
    const values = [
      ['jonas', 'florencio', 'barros'],
      ['monitor', 'gabinete', 'teclado'],
    ];
    const googleAuthentication = new GoogleAuthentication();
    const googleAuth = googleAuthentication.auth();
    const range = 'A1';
    const spreedSheetId = '1nrLfKR9Wac-qULzOvXUZPDPLO4Uy-gcfOCqOSz1-7B0';

    const sendGoogleSheets = new SendGoogleSheets(
        values, googleAuth, range, spreedSheetId);
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
