import AddClient from '../../../useCase/add-client';
import {IDataBase} from '../../gateway/IDataBase';
import DataBase from '../../../external/db/DataBase';
import {createClient} from './create-body-object';
import ValidationsController from '../Validations/ValidationsController';

class Send {
  private database: IDataBase;
  constructor(private body: any) {
    this.database = new DataBase();
  }

  sendData() {
    const validRequest = new ValidationsController();
    const {status, statusCode, message} = validRequest.request(this.body);
    if (status !== true) {
      return {
        statusCode,
        response: {
          status,
          message,
        },
      };
    }
    const client = createClient(this.body);
    const addClient = new AddClient(client, this.database);
    return addClient.toAdd()
        .then((result) => ({statusCode: 201, response: result}))
        .catch((error) => {
          return {statusCode: 500,
            response: {
              status: false,
              message: error.message,
            },
          };
        });
  }
}

export default Send;
