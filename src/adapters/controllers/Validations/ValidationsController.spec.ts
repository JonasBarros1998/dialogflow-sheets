import ValidationsController from './ValidationsController';

describe('Suite test the class Send', function() {
  const validationsController = new ValidationsController();

  it(`Should return object with a message alerting user what 
    send a invalid object`, async function() {
    const valid = validationsController.request({});
    const invalidObject = {
      status: false,
      message: `The object is empty`,
    };
    expect(valid).toMatchObject(invalidObject);
  });

  it(`if to send param undefined, should return a object alerting
  user what invalid object`, async function() {
    const valid = validationsController.request(undefined);
    const invalidObject = {
      status: false,
      message: `the body don't is object. typeof undefined`,
    };
    expect(valid).toMatchObject(invalidObject);
  });
});
