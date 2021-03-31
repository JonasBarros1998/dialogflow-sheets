/* eslint-disable camelcase */
import {google, Auth, sheets_v4} from 'googleapis';
import env from '../../../../env.json';
import {IDatasGoogleSheets} from '../interface/IDatasGoogleSheets';

class GoogleSheets {
  private googleSheets: IDatasGoogleSheets
  private dataGoogleSheets: Array<IDatasGoogleSheets>
  /**
   * @constructor
   * @param {IDatasGoogleSheets} googleSheets
   */
  constructor(googleSheets: IDatasGoogleSheets) {
    this.googleSheets = googleSheets;
    this.dataGoogleSheets = [];
  }

  /**
   * Retorna um array com todos os atributos necessários para
   * adicionar os dados ao google sheets.
   * @method
   * @return {Array<IDatasGoogleSheets>}
   */
  public sheets():Array<IDatasGoogleSheets> {
    this.dataGoogleSheets.push(this.googleSheets);
    return this.dataGoogleSheets;
  }

  /**
   * Retorna os dados cadastrados em uma planilha do google sheets
   * @static
   * @param {Auth.OAuth2Client} auth
   * @return {Promise<sheets_v4.Schema$ValueRange>}
   */
  static async getSheets(auth: Auth.OAuth2Client): Promise<sheets_v4.Schema$ValueRange> {
    const sheets = google.sheets({version: 'v4', auth});
    const googleSheets = await sheets.spreadsheets.values.get({
      spreadsheetId: env.sheet.spreadsheet_id,
      range: 'A1:Z',
    });
    return googleSheets.data;
  }
}

export default GoogleSheets;
