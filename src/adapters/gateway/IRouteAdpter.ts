import {Request, Response} from 'express';

export interface IRouteAdapter {
    send(req: Request, res: Response): Promise<Response<any, Record<string, any>>>
}
