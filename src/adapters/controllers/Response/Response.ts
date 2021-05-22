import {IResponse} from '../interface/IResponse';
import {Response} from 'express';

class ResponseController implements IResponse {
  constructor(private res: Response) {}
  send(statusCode: number, json: any): any {
    return this.res.status(statusCode).json(json);
  }
}

export default ResponseController;
