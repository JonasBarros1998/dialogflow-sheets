import ReceiverController from './ReceiverController';
import {Request, Response, response, request} from 'express';

describe('Test ReceiverController', function() {
  it('get all datas from google sheets', async function() {
    const req: Request = request;
    const res: Response = response;
    const receiverController = new ReceiverController(req, res);
    const datas = await receiverController.receiver();
    expect(datas).toEqual(
        expect.objectContaining({
          range: expect.any(String),
          majorDimension: expect.any(String),
          values: expect.any(Array),
        }),
    );
  });
});
