import InvalidClient from './InvalidClient';

describe('Suit test InvalidClient', function() {
  it('validate properties name and message', function() {
    const message = `The client in invalid`;
    const invalidClient = new InvalidClient(message);
    expect(invalidClient.name).toEqual('InvalidClient');
    expect(invalidClient.message).toEqual(invalidClient.message);
  });
});
