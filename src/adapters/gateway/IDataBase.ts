import {IClient} from '../../entity/interfaces/IClient';
export interface IDataBase {
  save(client: IClient,
    validInputOption?: string,
    range?:string,
    dimension?: string
    ): Promise<void>

  list(): void
}
