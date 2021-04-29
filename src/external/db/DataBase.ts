import {google, Auth, sheets_v4} from 'googleapis';
import {IDataBase} from '../../adapters/gateway/IDataBase';
import {IClient} from '../../entity/interfaces/IClient';

class DataBase implements IDataBase {
  constructor() {}

  async save(client: IClient): Promise<void> {
    const sheets = google.sheets({version: 'v4'});
    const spreadsheets = await sheets.spreadsheets.values.append({
      spreadsheetId: '',
      valueInputOption: '',
      range: '',
      requestBody: {
        majorDimension: '',
        values: [[]],
      },
    });
    console.log('status spreadsheets >>>> ', spreadsheets);
  }

  list(): void {
    return;
  }
}

export default DataBase;
