import {IClient} from '../../../entity/interfaces/IClient';
import {IMessageController} from '../../../shared/interfaces/IMessageController';

export interface IValidations {
  request(body: IClient): IMessageController
  _emptyObject(body: object): IMessageController
  _typeofObject(body: object): IMessageController
}
