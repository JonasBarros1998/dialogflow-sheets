import {Request, Response} from 'express';

export interface IRouteAdapter {
    send(req: Request, res: Response): Promise<Response<any, Record<string, any>>>
    list(req: Request, res: Response): Promise<Response<any, Record<string, any>>>
}
