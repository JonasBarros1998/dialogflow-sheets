/* eslint-disable camelcase */
/* eslint-disable max-len */
import {google, Auth, sheets_v4} from 'googleapis';
import {GaxiosPromise} from 'gaxios';

/**
 * @class
 */
class SendGoogleSheets {
  private googleSheets: {values: Array<string[]>, range: string,
                         spreedSheetId: string, majorDimension: string,
                         valueInputOption: string};
  private auth: Auth.OAuth2Client;

  // eslint-disable-next-line require-jsdoc
  constructor(auth: Auth.OAuth2Client,
      googleSheets: {values: Array<string[]>,
                     range: string, spreedSheetId: string,
                     majorDimension: string, valueInputOption: string}) {
    this.googleSheets = googleSheets;
    this.auth = auth;
  }
  /**
   * Escrever na planilha google sheets
   * @method
   * @return {Promise<void | sheets_v4.Schema$AppendValuesResponse>}
   */
  async send(): Promise<GaxiosPromise<sheets_v4.Schema$AppendValuesResponse>> {
    const {
      values,
      range,
      spreedSheetId,
      majorDimension,
      valueInputOption,
    } = this.googleSheets;
    const sheets: sheets_v4.Sheets = google.sheets({version: 'v4', auth: this.auth});
    return await sheets.spreadsheets.values.append({
      spreadsheetId: spreedSheetId,
      valueInputOption: valueInputOption,
      range: range,
      requestBody: {
        majorDimension: majorDimension,
        values: values,
      },
    });
  };
}

export default SendGoogleSheets;
