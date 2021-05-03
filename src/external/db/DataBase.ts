/* eslint-disable camelcase */
/* eslint-disable max-len */
import {IDataBase} from '../../adapters/gateway/IDataBase';
import {IClient} from '../../entity/interfaces/IClient';
import env from '../../../env.json';
import CreateAutentication from './CreateAuthentication';
import {IErrors} from './interfaces/IErrors';
import {ISucess} from './interfaces/ISucess';

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

  async save(client: IClient, validInputOption:string = 'RAWS', range:string = 'A1',
      dimension: string = 'Rows'): Promise<ISucess|IErrors> {
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
    })
        .then((response) => ({statusText: response.statusText}))
        .catch((error) => {
          const err = error.errors[0];
          throw new Error(err.message);
        });
  }

  list(): void {
    return;
  }
}

export default DataBase;
