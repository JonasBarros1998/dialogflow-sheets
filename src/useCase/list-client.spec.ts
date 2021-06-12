import ListClient from './list-client';
import Database from '../external/db/DataBase';

describe(`Suit test use case ListClient`, function() {
  it(`should return the list with all clients registry 
    in google sheets`, async function() {
    const listClient = new ListClient(new Database());
    await expect(listClient.list()).resolves.toBeTruthy();
  });
});
