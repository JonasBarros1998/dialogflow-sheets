/* eslint-disable camelcase */
/* eslint-disable max-len */
import {google, Auth, sheets_v4} from 'googleapis';

/**
 * @class
 */
class SendGoogleSheets {
  private values: Array<string[]>;
  private auth: Auth.OAuth2Client;
  private range: string;
  private spreedSheetId: string
  /**
   * @constructor
   * @param {any} values Valores a serem adicionados em uma planilha
   * @param {Auth.OAuth2Client} auth Autenticação do usuário para adicionar
   * dados na planilha.A autenticação é feita instanciando a classe
   * `GoogleAuthentication`, e chamamdo o método `auth()`
   * @param {string} range Onde os dados deverão ser adicionados
   * na planilha do google. Ex: ` `
   * @param {string} spreedSheetId Id da planilha sendo utilizada
   */
  constructor(values: Array<string[]>, auth: Auth.OAuth2Client, range: string, spreedSheetId: string) {
    this.values = values;
    this.auth = auth;
    this.range = range;
    this.spreedSheetId = spreedSheetId;
  }
  /**
   * Escrever na planilha google sheets
   * @method
   * @return {Promise<void | sheets_v4.Schema$AppendValuesResponse>}
   */
  async send(): Promise<void | sheets_v4.Schema$AppendValuesResponse> {
    const sheets = google.sheets({version: 'v4', auth: this.auth});
    return await sheets.spreadsheets.values.append({
      spreadsheetId: this.spreedSheetId,
      valueInputOption: 'RAW',
      range: this.range,
      requestBody: {
        majorDimension: 'ROWS',
        values: this.values,
      },
    }).then((response) => response.data)
        .catch((err) => console.error(err));
  };
}

export default SendGoogleSheets;
