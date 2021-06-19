import {IErrors} from '../../external/db/interfaces/IErrors';
import {ISucess} from '../../external/db/interfaces/ISucess';

import {IClient} from '../../entity/interfaces/IClient';
export interface IDataBase {
  save(client: IClient,
    validInputOption?: string,
    range?: string,
    dimension?: string
  ): Promise<ISucess|IErrors>

  list(range: string,
    spreadsheetId?: string | undefined): Promise<Array<[][]> | void | null>
}
