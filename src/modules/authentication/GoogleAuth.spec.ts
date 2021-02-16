import GoogleAuthentication from './GoogleAuthentication';

describe('Google auth', function() {
  it('get auth google token', function() {
    const googleAuthentication = new GoogleAuthentication();
    const googleAuth = googleAuthentication.auth();
    expect(googleAuth.credentials).toEqual(
        expect.objectContaining({
          access_token: expect.any(String),
          refresh_token: expect.any(String),
          scope: expect.any(String),
          token_type: expect.any(String),
          expiry_date: expect.any(Number),
        }),
    );
  });

  it('get datas google sheets', function() {
    const googleAuthentication = new GoogleAuthentication();
    const sendDatas = googleAuthentication.auth();
    googleAuthentication.listMajors(sendDatas);
  });
});
