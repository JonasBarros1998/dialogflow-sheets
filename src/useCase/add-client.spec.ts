import AddClient from './add-client';
import {IClient} from '../entity/interfaces/IClient';
import {IDataBase} from '../adapters/gateway/IDataBase';
import DataBase from '../external/db/DataBase';

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
    const database:IDataBase = new DataBase();
    const client = new AddClient(datasOfClient, database);
    expect(client instanceof AddClient).toEqual(true);
  });

  it(`if attribute client is implements all attributes of IClient`, function() {
    const database: IDataBase = new DataBase();
    const addClient = new AddClient(datasOfClient, database);
    expect(addClient.client).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
        }),
    );
  });

  it(`if send description with less 300 characters, the method
    addClient will returned the description error`, async function() {
    const invalidDataClient: IClient = {
      name: 'Jonas Barros',
      description: wrongDescription,
      email: 'primary_email@gamail.com.us',
      phone: '(11) 99945-8990',
    };
    const phrase = `The Property description is less 300 characters`;
    const database: IDataBase = new DataBase();
    const client = new AddClient(invalidDataClient, database);
    const validInputOption = 'RAW';
    await client.toAdd(validInputOption)
        .catch((error) =>
          expect(error.message).toEqual(phrase));
  });

  it(`If send a datas the a client, the method 
    toAdd, will returned status OK`, async function() {
    const validClient: IClient = {
      name: 'firts Name',
      description: description,
      email: 'first_email@gmail.com.us',
      phone: '(11) 99999-8907',
    };

    const database: IDataBase = new DataBase();
    const client = new AddClient(validClient, database);
    const statusText = 'OK';
    await client.toAdd()
        .then((response) =>
          expect(response.statusText).toEqual(statusText));
  });
});
