import {IDataBase} from '../../adapters/gateway/IDataBase';
import {IClient} from '../../entity/interfaces/IClient';


class DataBase implements IDataBase {
  private client: IClient;

  constructor() {
    this.client = {
      name: 'jonas',
      email: 'jonas_barros@outlook.com',
      description: 'okoko',
      phone: '(11) 963582924',
    };
  }

  save(client: IClient): IClient {
    console.log('interface DataBase >>>> ', client);
    return client;
  }

  list(): void {
    return;
  }
}

export default DataBase;
