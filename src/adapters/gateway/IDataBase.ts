import {IClient} from '../../entity/interfaces/IClient';
export interface IDataBase {
  save(client: IClient): Promise<void>
  list(): void
}
