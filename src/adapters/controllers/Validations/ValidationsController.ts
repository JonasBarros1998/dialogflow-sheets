import {IClient} from '../../../entity/interfaces/IClient';
import {IMessageController} from '../../../shared/interfaces/IMessageController';
import {IValidations} from '../interface/IValidations';

class ValidationsController implements IValidations {
  request(body: IClient): IMessageController {
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

export default ValidationsController;
