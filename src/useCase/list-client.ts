import {IDataBase} from '../adapters/gateway/IDataBase';

class ListClient {
  constructor(private database: IDataBase) {
    this.database = database;
  }

  async list():Promise<string|any> {
    const range = 'A2:D100';
    return await this.database.list(range)
        .then((response) => (Promise.resolve(response)))
        .catch((error) => Promise.reject(error));
  }
}

export default ListClient;
