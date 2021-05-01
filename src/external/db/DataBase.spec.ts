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
  it('if save datas sucess, will return response with status 200', async function() {
    const database = new DataBase();
    database.save(datasOfClient)
        .then(function(response) {
          expect(response.status).toEqual(200);
        });
  });

  it(`if save with invalid property validInputOption will returned
  status 404 bad request`, async function() {
    const database = new DataBase();
    const validInputOption = 'Text';
    await database.save(datasOfClient, validInputOption)
        .catch(function(error) {
          const [errors] = error.errors;
          expect(error.response.status).toEqual(400);
          expect(error.response.statusText).toEqual('Bad Request');
          expect(errors).toEqual(
              expect.objectContaining({
                message: expect.any(String),
                reason: expect.any(String),
              }),
          );
        });
  });

  it(`if send a invalid property range, will returned 
    status 404 bad request`, async function() {
    const database = new DataBase();
    const range = '123243';
    await database.save(datasOfClient, range)
        .catch(function(error) {
          const [errors] = error.errors;
          expect(error.response.status).toEqual(400);
          expect(error.response.statusText).toEqual('Bad Request');
          expect(errors).toEqual(
              expect.objectContaining({
                message: expect.any(String),
                reason: expect.any(String),
              }),
          );
        });
  });

  it(`if send a invalid property dimension, will returned 
    status 404 bad request`, async function() {
    const database = new DataBase();
    const dimension = 'BIG';
    await database.save(datasOfClient, dimension)
        .catch(function(error) {
          const [errors] = error.errors;
          expect(error.response.status).toEqual(400);
          expect(error.response.statusText).toEqual('Bad Request');
          expect(errors).toEqual(
              expect.objectContaining({
                message: expect.any(String),
                reason: expect.any(String),
              }),
          );
        });
  });
});
