import GoogleSheets from '../../googleSheets/domain/GoogleSheets';
import GoogleAuthentication from '../../authentication/GoogleAuthentication';

describe('google sheets', function() {
  it('get datas google sheets', async function() {
    const googleAuthentication = new GoogleAuthentication();
    const auth = googleAuthentication.auth();
    const googleSheets = await GoogleSheets.sheets(auth);
    expect(googleSheets).toEqual(
        expect.objectContaining({
          range: expect.any(String),
          majorDimension: expect.any(String),
          values: expect.any(Array),
        }),
    );
  });
});
