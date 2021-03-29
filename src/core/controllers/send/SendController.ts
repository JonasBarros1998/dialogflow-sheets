/* eslint-disable camelcase */
/* eslint-disable max-len */
import GoogleAuthentication from '../../../modules/authentication/GoogleAuthentication';
import SendGoogleSheets from '../../../modules/googleSheets/SendGoogleSheets';
import {Request, Response} from 'express';
import {ISuccessResponse} from './interface/ISendController';

/**
 * @class
 */
class SendController {
  private request: Request;
  private response: Response;

  /**
   * @constructor
   * @param {object} request
   * @param {object} response
   */
  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
  /**
   * @method
   * @return {SendGoogleSheets}
   */
  async sendGoogleSheets(): Promise<ISuccessResponse> {
    const googleAuthentication = new GoogleAuthentication();
    const auth = googleAuthentication.auth();
    const sendGoogleSheets = new SendGoogleSheets(auth, this.request.body);
    return await sendGoogleSheets.send()
        .then(() => ({message: 'Dados adicionados com sucesso', status: true}))
        .catch((error) => {
          console.log(error);
          return {message: 'Não foi possível salvar os dados', status: false};
        });
  }
}

export default SendController;
