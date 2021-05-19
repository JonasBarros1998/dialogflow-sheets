import {Response} from 'express';
import AddClient from '../../../useCase/add-client';
import {IDataBase} from '../../gateway/IDataBase';
import DataBase from '../../../external/db/DataBase';
import {IClient} from '../../../entity/interfaces/IClient';
import {IControllerValidate} from '../interface/IControllerValidate';
import {IMessageController} from '../../../shared/interfaces/IMessageController';
import {IResponse} from '../interface/IResponse';
import ResponseController from '../Response/Response';

class Send implements IControllerValidate {
  private database: IDataBase;
  private body: any;
  private responseController: IResponse;
  constructor(body: any, private response: Response) {
    this.body = body;
    this.database = new DataBase();
    this.responseController = new ResponseController(this.response);
  }

  sendData() {
    const requestIsValid = this._validateRequest(this.body);
    if (requestIsValid.status !== true) {
      return this.responseController
          .send(requestIsValid.statusCode,
              {status: requestIsValid.status,
                message: requestIsValid.message});
    }
    const client: IClient = {
      name: this.body.name,
      description: this.body.description,
      email: this.body.email,
      phone: this.body.phone,
    };
    const addClient = new AddClient(client, this.database);
    return addClient.toAdd()
        .then((result) => {
          return this.responseController.send(201, result);
        })
        .catch((error) => {
          return this.responseController
              .send(500,
                  {status: false,
                    message: error.message});
        });
  }

  _validateRequest(body: IClient): IMessageController {
    const objectIsEmpty = this._emptyObject(body);
    if (objectIsEmpty.status === false) {
      return objectIsEmpty;
    }
    const bodyIsObject = this._typeofObject(body);
    if (bodyIsObject.status === false) {
      return bodyIsObject;
    }
    return {status: true, message: 'sucess', statusCode: 200};
  }

  _emptyObject(body: object): IMessageController {
    const keys = Object.keys(body);
    if (keys.length === 0) {
      return {status: false,
        message: `The object is empty`,
        statusCode: 400};
    }
    return {status: true, message: 'sucess', statusCode: 200};
  }

  _typeofObject(body: object): IMessageController {
    if (typeof body !== 'object') {
      return {status: false,
        message: `the body don't is object. typeof ${typeof body}`,
        statusCode: 400};
    }
    return {status: true, message: 'sucess', statusCode: 200};
  }
}

export default Send;
