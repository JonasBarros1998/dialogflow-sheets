import InvalidParam from './InvalidParam';

describe('Suit test class InvalidParam', function() {
  it('validing properties name and message', function() {
    const message = `send invalid param`;
    const invalidParam = new InvalidParam(message);
    expect(invalidParam.name).toEqual('InvalidParam');
    expect(invalidParam.message).toEqual('send invalid param');
  });
});
