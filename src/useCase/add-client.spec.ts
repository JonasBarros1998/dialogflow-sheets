import AddClient from './add-client';
import {IClient} from '../entity/interfaces/IClient';

const description = ` Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Nam metus massa, 
aliquet eget vehicula aliquet, molestie et mauris.
Vivamus risus metus, finibus ac est at, cursus 
auctor arcu. Vivamus risus metus, finibus ac est at, cursus 
auctor arcu. Vivamus risus metus, finibus ac est at, cursus 
auctor arcu.`;

const wrongDescription = ` Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Nam metus massa, 
aliquet eget vehicula aliquet, molestie et mauris.
Vivamus risus metus, finibus ac est at, cursus 
auctor arcu. Vivamus risus metus, finibus ac est at, cursus`;

const datasOfClient: IClient = {
  name: 'Jonas',
  description: description,
  email: 'primaryEmail.email@gmail.com',
  phone: '(11) 90000-0000',
};

describe('suit test class AddClient', function() {
  it('the variable client is instance of class AddClient', function() {
    const client = new AddClient(datasOfClient);
    expect(client instanceof AddClient).toEqual(true);
  });

  it(`if attribute client is implements all attributes of IClient`, function() {
    const addClient = new AddClient(datasOfClient);
    expect(addClient.client).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
        }),
    );
  });

  it(`if call method addClient, will returned a array with datas the client`, function() {
    const client = new AddClient(datasOfClient);
    expect(client.addClient()).toEqual(
        expect.arrayContaining([{
          name: expect.any(String),
          description: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
        }]),
    );
  });

  it(`if send description with less 300 characters, the method
    addClient will returned the description error`, function() {
    const invalidDataClient: IClient = {
      name: 'Jonas',
      description: wrongDescription,
      email: 'primary_email@gamail.com.us',
      phone: '(11) 99945-8990',
    };
    const phrase = `The Property description is less 300 characters`;
    const client = new AddClient(invalidDataClient);
    const addclient: any = client.addClient();
    expect(addclient.message).toEqual(expect.stringMatching(phrase));
    expect(addclient.status).toBeFalsy();
  });
});
