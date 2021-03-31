/* eslint-disable camelcase */
import {google, Auth, sheets_v4} from 'googleapis';
import {GaxiosPromise} from 'gaxios';
import {IDatasGoogleSheets} from './interface/IDatasGoogleSheets';

/**
 * DECREPTED
 * Utilize o metodo `sendData` da classe SendDataGoogleSheets
 * modules/googleSheets/sendData/SendDataGoogleSheets
 * @class
 */
class SendGoogleSheets {
  private googleSheets: IDatasGoogleSheets;
  private auth: Auth.OAuth2Client;

  /**
   * @constructor
   * @param {Auth.OAuth2Client} auth Google sheets credentials
   * @param {IDatasGoogleSheets} googleSheets Datas for send google sheets
   */
  constructor(auth: Auth.OAuth2Client, googleSheets: IDatasGoogleSheets) {
    this.googleSheets = googleSheets;
    this.auth = auth;
  }
  /**
   * DECREPTED
   *
   * Utilize o metodo `sendData` da classe SendDataGoogleSheets
   * modules/googleSheets/sendData/SendDataGoogleSheets
   *
   * Tem função de enviar dados na planilha do google
   * @method
   * @return {Promise<GaxiosPromise<sheets_v4.Schema$AppendValuesResponse>>}
   */
  async send(): Promise<GaxiosPromise<sheets_v4.Schema$AppendValuesResponse>> {
    const {
      values,
      range,
      spreadsheetId,
      majorDimension,
      valueInputOption,
    } = this.googleSheets;
    const sheets: sheets_v4.Sheets = google
        .sheets({version: 'v4', auth: this.auth});
    return await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      valueInputOption,
      range,
      requestBody: {
        majorDimension,
        values,
      },
    });
  };
}

export default SendGoogleSheets;
