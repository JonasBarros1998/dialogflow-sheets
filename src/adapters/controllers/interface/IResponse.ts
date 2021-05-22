export interface IResponse {
  send(statusCode: number|string, json: any): any
}
