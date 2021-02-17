/* eslint-disable max-len */
/* eslint-disable camelcase */
import {google, Auth, sheets_v4} from 'googleapis';

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
    const spreadsheets = await sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    });
    return spreadsheets.data;
  }
}

export default GoogleSheets;
