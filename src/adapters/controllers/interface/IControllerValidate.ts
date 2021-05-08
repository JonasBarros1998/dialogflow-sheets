import {IClient} from '../../../entity/interfaces/IClient';
import {IMessageController} from '../../../shared/interfaces/IMessageController';

export interface IControllerValidate {
  _emptyObject(body: object): IMessageController
  _typeofObject(body: object): IMessageController
  _validateRequest(body: IClient): IMessageController|boolean
}
