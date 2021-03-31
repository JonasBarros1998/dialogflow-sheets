export interface IResponseError {
  code: number;
  errors: {
    message: string;
    reason: string;
  };
  response: {
    statusText: string;
  };
}
