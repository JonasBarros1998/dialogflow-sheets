/* eslint-disable max-len */
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

  async toAdd(validInputOption:string = 'RAW', range:string = 'A1',
      dimension:string = 'Rows'): Promise<any> {
    const description = this.validingMaxLengthDescription();
    return new Promise((resolve, reject) => {
      if (description.status === true) {
        const [client] = Client.create(this.client);
        return this.database.save(client, validInputOption, range, dimension)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
      }
      return reject(description);
    });
  }
}

export default AddClient;
