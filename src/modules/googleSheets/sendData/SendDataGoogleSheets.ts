import {google} from 'googleapis';
import GoogleAuthentication from '../../authentication/GoogleAuthentication';
import GoogleSheets from '../domain/GoogleSheets';
import {
  IDatasGoogleSheets,
  IReponseSucess,
  IResponseError,
} from '../interface';

class SendDataGoogleSheets {
  private dataGoogleSheets: IDatasGoogleSheets;
  private googleAuth: GoogleAuthentication;
  private googleSheets: GoogleSheets;

  /**
   * @constructor
   * @param {IDatasGoogleSheets} dataGoogleSheets Datas for send google sheets
   */
  constructor(dataGoogleSheets: IDatasGoogleSheets) {
    this.dataGoogleSheets = dataGoogleSheets;
    this.googleAuth = new GoogleAuthentication;
    this.googleSheets = new GoogleSheets(this.dataGoogleSheets);
  }

  /**
   * @method
   * @return {Promise<void>}
   */
  public async sendData(): Promise<IReponseSucess | void> {
    const auth = this.googleAuth.auth();
    const datas = this.googleSheets.sheets();
    const config = google.sheets({version: 'v4', auth});
    return config.spreadsheets.values.append(...datas)
        .then(function(response: IReponseSucess) {
          return {
            status: response.status,
            data: response.data,
          };
        })
        .catch(function(error: IResponseError) {
          const datas: IResponseError = {
            code: error.code,
            errors: error.errors,
            response: {
              statusText: error.response.statusText,
            },
          };
          throw datas;
        });
  }
}

export default SendDataGoogleSheets;
