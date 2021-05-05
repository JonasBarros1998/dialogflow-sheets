import {Request, response, Response} from 'express';
import {IAddClient} from '../../../useCase/interface/iadd-client';
import AddClient from '../../../useCase/add-client';
import {IDataBase} from '../../gateway/IDataBase';
import DataBase from '../../../external/db/DataBase';
import {IClient} from '../../../entity/interfaces/IClient';

class Send {
  private database: IDataBase;
  private body: IClient;
  private newClient: AddClient
  constructor(private request: Request, private response: Response) {
    this.database = new DataBase();
    this.body = this.request.body;
    this.newClient = new AddClient(this.body, this.database);
  }

  sendData() {
    const requestIsValid = this.validRequest(this.body);
    if (requestIsValid !== true) {
      return requestIsValid;
    }
    return this.newClient.toAdd()
        .then(function(response) {
          console.log(response);
        })
        .catch((error) => {
          return this.response.status(500).send(error);
        });
  }

  private validRequest(body: IClient) {
    const objectIsEmpty = this.emptyObject(body);
    if (objectIsEmpty.status === false) {
      return this.response.status(500).json(objectIsEmpty);
    }
    const bodyIsObject = this.typeofObjectObdy(body);
    if (bodyIsObject.status === false) {
      return this.response.status(500).json(bodyIsObject);
    }
    return true;
  }

  private emptyObject(body: object) {
    const keys = Object.keys(body);
    if (keys.length === 0) {
      return {status: false, message: `The object don't can empty`};
    }
    return {status: true, message: 'sucess'};
  }

  private typeofObjectObdy(body: object) {
    if (typeof body !== 'object') {
      return {status: false, message: `the body don't is object. typeof ${typeof body}`};
    }
    return {status: true, message: 'sucess'};
  }
}

export default Send;
