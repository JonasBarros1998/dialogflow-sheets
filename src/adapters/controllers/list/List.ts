import ValidationsController from '../Validations/ValidationsController';
import ListClient from '../../../useCase/list-client';
import {IDataBase} from '../../gateway/IDataBase';
import DataBase from '../../../external/db/DataBase';
import CountClients from '../../presenters/count-clientes';

class List {
  private database: IDataBase;
  constructor() {
    this.database = new DataBase();
  }

  listData() {
    const listClient = new ListClient(this.database);
    return listClient.list()
        .then(function(response) {
          return CountClients.total(response);
        })
        .catch(function(error) {
          return {
            statusCode: 500,
            response: {
              status: false,
              message: error.message,
            },
          };
        });
  }
}

export default List;
