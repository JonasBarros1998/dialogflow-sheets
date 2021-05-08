import {Request, Response} from 'express';
import Send from './Send';
import supertest from 'supertest';
import env from '../../../../env.json';

const request = supertest(`http://localhost:8080/${env.port}`);


describe('Suite Test controller Send', function() {
  it('', function() {
    const post = request.post('/send');
    post
        .then((response) => {
          
        })
        .catch((error) => {

        });
  });
});
