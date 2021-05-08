/* eslint-disable require-jsdoc */
import Client from './Client';

const description = `
  Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit. Nam metus massa, 
  aliquet eget vehicula aliquet, molestie et mauris.
  Vivamus risus metus, finibus ac est at, cursus 
  auctor arcu. Suspendisse posuere convallis velit,
  laoreet euismod enim ullamcorper suscipit.
  Phasellus idplplpppp egestas arcu ou.`;


describe('Suit test class Client ', function() {
  it('throwing TypeError in method create, the class Client', function() {
    const client = {
      'name': 'my name',
      'description': description,
      'email': 'firstemail.mailg@gmail.com',
      'phone': '1195679-8976',
    };

    // function throwError() {
    // }
    Client.create(client);

    // expect(throwError).toThrowError();
  });
  /*
  it(`if send object valid client, the method create, 
  returned an object`, function() {
    const client = {
      'name': 'my name',
      'description': description,
      'email': 'firstemail.mailg@gmail.com',
      'phone': '(11) 95679-8976',
    };
    const [listClient]: Array<object> = Client.create(client);
    expect(listClient).toEqual(
        expect.objectContaining({
          'name': expect.any(String),
          'description': expect.any(String),
          'email': expect.any(String),
          'phone': expect.any(String),
        }),
    );
  });*/
});
