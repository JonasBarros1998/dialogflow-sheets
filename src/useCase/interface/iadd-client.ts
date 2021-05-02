import {IClient} from '../../entity/interfaces/IClient';
import {Message} from './Error';

export interface IAddClient {
  addClient(): Message | Array<IClient>
}
