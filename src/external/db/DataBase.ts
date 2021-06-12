import dotenv from 'dotenv';
import {IDataBase} from '../../adapters/gateway/IDataBase';
import {IClient} from '../../entity/interfaces/IClient';
import {IGoogleSheetsError} from '../../shared/interfaces/IGoogleSheetsError';
import CreateAutentication from './CreateAuthentication';
import {IErrors} from './interfaces/IErrors';
import {ISucess} from './interfaces/ISucess';
dotenv.config();

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
      dimension: string = 'Rows'): Promise<ISucess|IErrors> {
    const dataClient = this.prepareDatasToSendInDataBase(client);
    const sheets = this.createAuthentication.auth2();
    return await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      valueInputOption: validInputOption,
      range: range,
      requestBody: {
        majorDimension: dimension,
        values: dataClient,
      },
    })
        .then(() => ({statusText: 'OK', datas: client}))
        .catch((error) => {
          const err = error.errors[0];
          throw new Error(err.message);
        });
  }

  async list(range: string = 'A1:D3000',
      spreadsheetId = process.env.SPREADSHEET_ID): Promise<Array<[][]> | void | null> {
    const sheets = this.createAuthentication.auth2();
    return await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    })
        .then((response) => response.data.values)
        .catch(function(error) {
          const [err]: IGoogleSheetsError = error.errors;
          throw new Error(err.message);
        });
  }
}

export default DataBase;
