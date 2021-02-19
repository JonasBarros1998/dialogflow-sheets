/* eslint-disable max-len */
/* eslint-disable camelcase */
import {google, Auth, sheets_v4} from 'googleapis';
import env from '../../../../env.json';

/**
 * @class
 */
class GoogleSheets {
  /**
   * @static
   * @param {Auth.OAuth2Client} auth
   * @return {Promise<sheets_v4.Schema$ValueRange>}
   */
  static async sheets(auth: Auth.OAuth2Client): Promise<sheets_v4.Schema$ValueRange> {
    const sheets = google.sheets({version: 'v4', auth});
    const googleSheets = await sheets.spreadsheets.values.get({
      spreadsheetId: env.sheet.spreadsheet_id,
      range: 'A1:Z',
    });
    return googleSheets.data;
  }
}

export default GoogleSheets;
