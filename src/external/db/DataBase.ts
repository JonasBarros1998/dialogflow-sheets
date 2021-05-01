import {google} from 'googleapis';
import {IDataBase} from '../../adapters/gateway/IDataBase';
import {IClient} from '../../entity/interfaces/IClient';
import env from '../../../env.json';
import CreateAutentication from './CreateAuthentication';

class DataBase implements IDataBase {
  private createAuthentication: CreateAutentication;

  constructor() {
    this.createAuthentication = new CreateAutentication();
  }

  private prepareDatasToSendInDataBase(client: IClient): string[][] {
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
    const sheets = this.createAuthentication.auth2();
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
