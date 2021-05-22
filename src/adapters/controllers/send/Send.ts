import {Response, Request} from 'express';
import AddClient from '../../../useCase/add-client';
import {IDataBase} from '../../gateway/IDataBase';
import DataBase from '../../../external/db/DataBase';
import {createClient} from './create-body-object';
import {IResponse} from '../interface/IResponse';
import ResponseController from '../Response/Response';
import ValidationsController from '../Validations/ValidationsController';

class Send {
  private database: IDataBase;
  private responseController: IResponse;
  constructor(private req: Request, private res: Response) {
    this.database = new DataBase();
    this.responseController = new ResponseController(this.res);
  }

  sendData() {
    const validRequest = new ValidationsController();
    const {status, statusCode, message} = validRequest.request(this.req);
    if (status !== true) {
      return this.responseController
          .send(statusCode, {status, message});
    }
    const client = createClient(this.req);
    const addClient = new AddClient(client, this.database);
    return addClient.toAdd()
        .then((result) => this.responseController.send(201, result))
        .catch((error) => {
          return this.responseController
              .send(500,
                  {status: false,
                    message: error.message});
        });
  }
}

export default Send;
