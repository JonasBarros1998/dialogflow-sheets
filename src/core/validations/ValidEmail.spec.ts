import ValidEmail from '../../core/validations/ValidEmail';

describe('unit test of class ValidEmail', function() {
  it('expect return true for the method isvalid', function() {
    const validEmail = new ValidEmail('jonas_barros@outlook.com');
    expect(validEmail.isvalid()).toEqual(true);
  });
  it('expect return false for the method isvalid', function() {
    const validEmail = new ValidEmail('jonas_barros@outlook');
    expect(validEmail.isvalid()).toEqual(false);
  });
});
