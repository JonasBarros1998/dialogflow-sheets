/* eslint-disable max-len */
import GoogleAuthentication from '../../../modules/authentication/GoogleAuthentication';
import GoogleSheets from '../../../modules/googleSheets/domain/GoogleSheets';
import {Request, Response} from 'express';

/**
 * @class
 */
class ReceiverController {
  private req: Request;
  private res: Response;

  /**
   * @constructor
   * @param {object} req
   * @param {object} res
   */
  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
  }

  /**
   * @method
   * @return {GoogleSheets}
   */
  async receiver(): Promise<GoogleSheets> {
    const googleAuth = new GoogleAuthentication();
    const auth = googleAuth.auth();
    return await GoogleSheets.sheets(auth);
  }
}
export default ReceiverController;
