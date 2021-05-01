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

  async save(client: IClient, validInputOption:string = 'RAW', range:string = 'A1',
      dimension: string = 'Rows'): Promise<any> {
    const dataClient = this.prepareDatasToSendInDataBase(client);
    const sheets = this.createAuthentication.auth2();

    return await sheets.spreadsheets.values.append({
      spreadsheetId: env.sheet.spreadsheet_id,
      valueInputOption: validInputOption,
      range: range,
      requestBody: {
        majorDimension: dimension,
        values: dataClient,
      },
    });
  }

  list(): void {
    return;
  }
}

export default DataBase;
