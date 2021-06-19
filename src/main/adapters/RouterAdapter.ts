/* eslint-disable max-len */
import {Request, Response} from 'express';
import Send from '../../adapters/controllers/send/Send';
import List from '../../adapters/controllers/list/List';
import {IRouteAdapter} from '../../adapters/gateway/IRouteAdpter';

class RouterAdapter implements IRouteAdapter {
  public async send(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const send = new Send(req.body);
    const responseSend: any = await send.sendData();
    return res.status(responseSend.statusCode)
        .send(responseSend.response);
  }

  async list(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const list = new List();
    return list.listData()
        .then((result: any) =>
          res.status(200).send(result))
        .catch((error: any) =>
          res.status(error.statusCode).send(error.response));
  }
}

export default RouterAdapter;
