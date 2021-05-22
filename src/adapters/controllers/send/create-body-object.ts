import {IClient} from '../../../entity/interfaces/IClient';

/**
 * @param {any} body: body request
 * @return {IClient} return a formated object
 */
export function createClient(body: any): IClient {
  const client: IClient = {
    name: body.name,
    description: body.description,
    email: body.email,
    phone: body.phone,
  };
  return client;
}
