import Description from './Description';

describe('suit test entity Description', function() {
  it('if the class Description contain static method valid(), return true', function() {
    expect(Description.hasOwnProperty('valid')).toEqual(true);
  });
});
