import {google, Auth} from 'googleapis';


/**
 * @class
 */
class GoogleSheets {
  /**
   * @static
   * @param {Auth.OAuth2Client} auth
   */
  static sheets(auth: Auth.OAuth2Client): void {
    const sheets = google.sheets({version: 'v4', auth});
    const spreadsheets = sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    });
    console.log(spreadsheets);
  }
}


// eslint-disable-next-line require-jsdoc
/*
function listMajors(auth: Auth.OAuth2Client) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    range: 'Class Data!A2:E',
  }, (err:any, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name, Major:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row: any) => {
        console.log(`${row[0]}, ${row[4]}`);
      });
    } else {
      console.log('No data found.');
    }
  });
}*/

export default GoogleSheets;
