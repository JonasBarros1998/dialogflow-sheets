import Name from './Name';
import Description from './Description';
import Email from './Email';
import Phone from './Phone';
import {IClient} from './interfaces/IClient';

class Client {
  constructor(readonly name: Name, readonly description: Description,
              readonly email: Email, readonly phone: Phone) {
    this.name = name;
    this.description = description;
    this.email = email;
    this.phone = phone;
    Object.freeze(this);
  }

  static create(client: IClient): void | Array<IClient> {
    const map = new Map();
    const clientList: Array<IClient> = [];
    const clientKeys: Array<string> = Object.keys(client);

    map.set('name', Name.valid(client.name));
    map.set('description', Description.valid(client.description));
    map.set('email', Email.valid(client.email));
    map.set('phone', Phone.valid(client.phone));

    clientKeys.map(function(info) {
      if (map.get(info) === false) {
        throw new Error(`The Property ${info} is false`);
      }
    });

    clientList.push(client);
    return clientList;
  }
}

export default Client;
