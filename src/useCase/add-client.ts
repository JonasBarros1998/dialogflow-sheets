/* eslint-disable valid-jsdoc */
import MaxLength from './maxLength';
import {Validation} from './interface/validation';
import Client from '../entity/Client';
import {IClient} from '../entity/interfaces/IClient';
import {Message} from './interface/Error';
import {IDataBase} from '../adapters/gateway/IDataBase';

class AddClient {
  private descriptionMaxLength: Validation;

  constructor(readonly client: IClient, readonly database: IDataBase) {
    this.descriptionMaxLength = new MaxLength(this.client.description);
    this.database = database;
  }

  private validingMaxLengthDescription(): Message {
    const validDescription: Message = this.descriptionMaxLength.valid();
    if (validDescription.status === true) {
      return validDescription;
    }
    return validDescription;
  }

  addClient(): Message | Array<IClient> {
    const description = this.validingMaxLengthDescription();
    if (description.status === true) {
      const [client] = Client.create(this.client);
      this.database.save(client);
      return [client];
    }
    return description;
  }
}

export default AddClient;
