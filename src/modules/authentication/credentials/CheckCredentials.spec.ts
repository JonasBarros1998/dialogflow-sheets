import CheckCredentials from './CheckCredentials';

describe('test class checkCredentials', function() {
  it('sucess credentials in file env.json', async function() {
    const checkCredentials = new CheckCredentials();
    await checkCredentials.check()
        .then(function(response) {
          expect(response).toMatchObject({
            client_id: expect.any(String),
            project_id: expect.any(String),
            auth_uri: expect.any(String),
            token_uri: expect.any(String),
            auth_provider_x509_cert_url: expect.any(String),
            client_secret: expect.any(String),
            redirect_uris: expect.any(Array),
          });
        })
        .catch(function(error) {
          const menssage = `O arquivo env.json não foi localizado na raiz do projeto`;
          expect(
              Promise
                  .reject(new Error(menssage)))
              .rejects.toThrowError(menssage);
        });
  });
});
