import {Response} from 'express';

export interface IResponse {
  send(statusCode: number|string, json: any): Response<any, Record<string, any>>
}
