import {IClient} from '../../entity/interfaces/IClient';
export interface IDataBase {
  save(client: IClient): IClient
  list(): void
}
