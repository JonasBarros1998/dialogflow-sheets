// import supertest from 'supertest';
import dotenv from 'dotenv';
import Send from './Send';
dotenv.config();

// const request = supertest(process.env.DOMAIN_DEVELOP);

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Praesent feugiat tortor metus, sed volutpat dolor accumsan quis. 
  Ut et rutrum lacus, ac tincidunt lacus. Cras porttitor neque at lorem tincidunt, 
  euismod pulvinar ligula tincidunt. Proin posuere convallis ex. Nullam sit amet 
  arcu s.`;

describe('Suite test the controller Send', function() {
  it(`Should return a object with property status OK,
  and property data with all datas the client`, async function() {
    const sendClient = {
      name: 'My names',
      description: description,
      email: 'my_email@outlook.com.br',
      phone: '(11) 90000-9999',
    };
    const sendSucess = new Send(sendClient);
    expect(await sendSucess.sendData())
        .toEqual(expect.objectContaining({
          statusCode: expect.any(Number),
          response: {
            statusText: expect.any(String),
            datas: {
              name: expect.any(String),
              description: expect.any(String),
              email: expect.any(String),
              phone: expect.any(String),
            },
          },
        }));
  });
});
