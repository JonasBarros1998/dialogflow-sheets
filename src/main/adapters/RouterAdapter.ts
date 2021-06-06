/* eslint-disable max-len */
import {Request, Response} from 'express';
import Send from '../../adapters/controllers/send/Send';
import {IRouteAdapter} from '../../adapters/gateway/IRouteAdpter';

class RouterAdapter implements IRouteAdapter {
  public async send(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const send = new Send(req.body);
    const responseSend: any = await send.sendData();
    return res.status(responseSend.statusCode)
        .send(responseSend.response);
  }
}

export default RouterAdapter;
