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

  async toAdd(): Promise<void> {
    const description = this.validingMaxLengthDescription();
    return new Promise((resolve, reject) => {
      const [client] = Client.create(this.client);
      if (description.status === true) {
        this.database.save(client)
            .then((response) => (resolve(response)))
            .catch((error) => (reject(error)));
      }
      reject(description);
    });
  }
}

export default AddClient;
