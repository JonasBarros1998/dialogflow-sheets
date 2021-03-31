import GoogleSheets from '../../googleSheets/domain/GoogleSheets';
import GoogleAuthentication from '../../authentication/GoogleAuthentication';

describe('google sheets', function() {
  const data = {
    values: [
      ['nome: jonas, telefone: (00) 900000-1111'],
    ],
    range: 'A1',
    spreadsheetId: '1234',
    majorDimension: 'ROWS',
    valueInputOption: 'RAW',
  };

  // it('get datas google sheets', async function() {
  //   const googleAuthentication = new GoogleAuthentication();
  //   const auth = googleAuthentication.auth();
  //   const googleSheets = await GoogleSheets.getSheets(auth);
  //   expect(googleSheets).toEqual(
  //       expect.objectContaining({
  //         range: expect.any(String),
  //         majorDimension: expect.any(String),
  //         values: expect.any(Array),
  //       }),
  //   );
  // });

  it('Method sheets is returned typeof a object', function() {
    const googleSheets = new GoogleSheets(data);
    const dataSheets = typeof googleSheets.sheets();
    expect(dataSheets).toBe('object');
  });

  it('Method sheets is return a object with the correct properties', function() {
    const googleSheets = new GoogleSheets(data);
    const dataSheets = googleSheets.sheets();
    dataSheets.map((data)=> {
      expect(data).toEqual(
          expect.objectContaining({
            values: expect.any(Array),
            range: expect.any(String),
            spreadsheetId: expect.any(String),
            majorDimension: expect.any(String),
            valueInputOption: expect.any(String),
          }),
      );
    });
  });
});
