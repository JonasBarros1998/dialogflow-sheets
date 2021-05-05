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
});
