import {Request, Response} from 'express';
import AddClient from '../../../useCase/add-client';
import {IDataBase} from '../../gateway/IDataBase';
import DataBase from '../../../external/db/DataBase';
import {IClient} from '../../../entity/interfaces/IClient';
import {IControllerValidate} from '../interface/IControllerValidate';
import {IMessageController} from '../../../shared/interfaces/IMessageController';

class Send implements IControllerValidate {
  private database: IDataBase;
  private body: IClient;
  private newClient: AddClient
  constructor(private request: Request, private response: Response) {
    this.database = new DataBase();
    this.body = this.request.body;
    this.newClient = new AddClient(this.body, this.database);
  }

  sendData() {
    const requestIsValid = this._validateRequest(this.body);
    if (requestIsValid !== true) {
      return requestIsValid;
    }
    return this.newClient.toAdd()
        .then(function(response) {
          console.log(response);
        })
        .catch((error) => {
          return this.response.status(500).json({status: false, message: error.message});
        });
  }

  _validateRequest(body: IClient): boolean | Response {
    const objectIsEmpty = this._emptyObject(body);
    if (objectIsEmpty.status === false) {
      return this.response.status(500).json(objectIsEmpty);
    }
    const bodyIsObject = this._typeofObject(body);
    if (bodyIsObject.status === false) {
      return this.response.status(500).json(bodyIsObject);
    }
    return true;
  }

  _emptyObject(body: object): IMessageController {
    const keys = Object.keys(body);
    if (keys.length === 0) {
      return {status: false, message: `The object is empty`};
    }
    return {status: true, message: 'sucess'};
  }

  _typeofObject(body: object): IMessageController {
    if (typeof body !== 'object') {
      return {status: false, message: `the body don't is object. typeof ${typeof body}`};
    }
    return {status: true, message: 'sucess'};
  }
}

export default Send;
