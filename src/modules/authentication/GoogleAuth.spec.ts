import GoogleAuthentication from './GoogleAuthentication';

describe('Google auth', function() {
  it('get auth google token', function() {
    const googleAuthentication = new GoogleAuthentication();
    const googleAuth = googleAuthentication.auth();
    expect(googleAuth.credentials).toEqual(
        expect.objectContaining({
          web: expect.objectContaining({
            client_secret: expect.any(String),
            project_id: expect.any(String),
            client_id: expect.any(String),
            auth_uri: expect.any(String),
            token_uri: expect.any(String),
            auth_provider_x509_cert_url: expect.any(String),
            redirect_uris: expect.any(Array),
          }),
        }),
    );
  });
});
