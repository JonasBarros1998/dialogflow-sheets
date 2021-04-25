/* eslint-disable valid-jsdoc */
import MaxLength from './maxLength';
import Client from '../entity/Client';
import {IClient} from '../entity/interfaces/IClient';
import {Message} from './interface/Error';

class AddClient {
  private descriptionMaxLength: MaxLength;
  constructor(readonly client: IClient) {
    this.client = client;
    this.descriptionMaxLength = new MaxLength(this.client.description);
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
      const cliente = Client.create(this.client);
      return cliente;
    }
    return description;
  }
}

export default AddClient;
