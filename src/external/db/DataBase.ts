import {google} from 'googleapis';
import {IDataBase} from '../../adapters/gateway/IDataBase';
import {IClient} from '../../entity/interfaces/IClient';
import AuthenticationAdapter from './adapter/AuthenticationAdapter';
import {IAuthentication} from './interfaces/IAuthentication';
import env from '../../../env.json';

class DataBase implements IDataBase {
  private authentication: IAuthentication;
  constructor() {
    this.authentication = new AuthenticationAdapter();
  }

  private prepareDatasToSendInDataBase(client: IClient): string[][] {
    // console.log(JSON.stringify(client));
    const datasFormatted = [[
      `${client.name}`,
      `${client.email}`,
      `${client.phone}`,
      `${client.description}`,
    ]];
    return datasFormatted;
  }

  async save(client: IClient): Promise<void> {
    const dataClient = this.prepareDatasToSendInDataBase(client);
    const credentials = this.authentication.authenticationUser();
    const sheets = google.sheets({version: 'v4', auth: credentials});
    const spreadsheets = await sheets.spreadsheets.values.append({
      spreadsheetId: env.sheet.spreadsheet_id,
      valueInputOption: 'RAW',
      range: 'A1',
      requestBody: {
        majorDimension: 'ROWS',
        values: dataClient,
      },
    });
    console.log('status spreadsheets >>>> ', spreadsheets);
  }

  list(): void {
    return;
  }
}

export default DataBase;
