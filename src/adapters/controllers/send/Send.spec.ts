import supertest from 'supertest';
import env from '../../../../env.json';

const request = supertest(env.domain_develop);

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Praesent feugiat tortor metus, sed volutpat dolor accumsan quis. 
  Ut et rutrum lacus, ac tincidunt lacus. Cras porttitor neque at lorem tincidunt, 
  euismod pulvinar ligula tincidunt. Proin posuere convallis ex. Nullam sit amet 
  arcu s.`;

describe('Suite test the controller Send', function() {
  it(`Should return a object with property status OK,
  and property data with all datas the client`, async function() {
    const sendClient = {
      name: 'My name',
      description,
      email: 'myemail@outlook.com.br',
      phone: '(11) 96734-6900',
    };
    const response = await request.post(`/send`)
        .send(sendClient);
    expect(response.body.statusText).toEqual('OK');
    expect(response.body.datas).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
        }),
    );
  });
});
