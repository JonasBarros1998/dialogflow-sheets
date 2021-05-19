import {IResponse} from '../interface/IResponse';
import {Response} from 'express';

class ResponseController implements IResponse {
  constructor(private response: Response) {}

  send(statusCode: number, json: any): Response<any, Record<string, any>> {
    return this.response
        .status(statusCode)
        .json(json);
  }
}

export default ResponseController;
