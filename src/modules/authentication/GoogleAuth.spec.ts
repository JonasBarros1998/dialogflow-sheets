import GoogleAuthentication from './GoogleAuthentication';

describe('Google auth', function() {
  it('get auth google token', function() {
    const googleAuthentication = new GoogleAuthentication();
    const googleAuth = googleAuthentication.auth();
    expect(googleAuth.credentials).toEqual(
        expect.objectContaining({
          web: expect.objectContaining({
            clientSecret: expect.any(String),
            projectId: expect.any(String),
            clientId: expect.any(String),
            authUri: expect.any(String),
            tokenUri: expect.any(String),
            authProviderX509CertUrl: expect.any(String),
            redirectUris: expect.any(Array),
          }),
        }),
    );
  });
});
