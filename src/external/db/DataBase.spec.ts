/* eslint-disable max-len */
import DataBase from './DataBase';
import {IClient} from '../../entity/interfaces/IClient';

const description = ` Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Nam metus massa, 
aliquet eget vehicula aliquet, molestie et mauris.
Vivamus risus metus, finibus ac est at, cursus 
auctor arcu. Vivamus risus metus, finibus ac est at, cursus 
auctor arcu. Vivamus risus metus, finibus ac est at, cursus 
auctor arcu.`;

const datasOfClient: IClient = {
  name: 'Jonas',
  description: description,
  email: 'primaryEmail.email@gmail.com',
  phone: '(11) 90000-0000',
};

describe('suit test class DataBase', function() {
  it(`if save with invalid property validInputOption will returned
  a message explain the error`, async function() {
    const database = new DataBase();
    const validInputOption = 'Text';
    const errorMessage = `Invalid value at 'value_input_option' (type.googleapis.com/google.apps.sheets.v4.ValueInputOption), "Text"`;
    await database.save(datasOfClient, validInputOption)
        .catch(function(error) {
          expect(error.message).toEqual(errorMessage);
        });
  });

  it(`if send a invalid property range, will returned 
    a message explain the error`, async function() {
    const database = new DataBase();
    const range = '123243';
    const errorMessage = `Invalid value at 'value_input_option' (type.googleapis.com/google.apps.sheets.v4.ValueInputOption), "123243"`;
    await database.save(datasOfClient, range)
        .catch(function(error) {
          expect(error.message).toEqual(errorMessage);
        });
  });

  it(`if send a invalid property dimension, will returned
    a message explain the error`, async function() {
    const database = new DataBase();
    const dimension = 'BIG';
    const errorMessage = `Invalid value at 'value_input_option' (type.googleapis.com/google.apps.sheets.v4.ValueInputOption), "BIG"`;
    await database.save(datasOfClient, dimension)
        .catch(function(error) {
          expect(error.message).toEqual(errorMessage);
        });
  });

  it(`Should return the message error, when send invalid range`, async function() {
    const database = new DataBase();
    const range = 'ksjahdksaj';
    await database.list(range)
        .catch(function(error) {
          const errorMessage = `Unable to parse range: ksjahdksaj`;
          expect(error.message).toEqual(errorMessage);
        });
  });

  it(`Should return the message error, when send range exceeds grid limits`, async function() {
    const database = new DataBase();
    const range = 'A2132312';
    await database.list(range)
        .catch(function(error) {
          const errorMessage = `Range (Folha1!A2132312) exceeds grid limits. Max rows: 1000, max columns: 26`;
          expect(error.message).toEqual(errorMessage);
        });
  });

  it(`Should return the message error, when send invalid google sheets ID`, async function() {
    const database = new DataBase();
    const spreadsheetId = '12345';
    const range = 'A1:D3000';
    await database.list(range, spreadsheetId)
        .catch(function(error) {
          const errorMessage = `Requested entity was not found.`;
          expect(error.message).toEqual(errorMessage);
        });
  });

  it(`Should return datas the client, the typeof object`, async function() {
    const database = new DataBase();
    await database.list()
        .then(function(response) {
          expect(typeof response).toEqual('object');
        });
  });
});
