import Name from './Name';

describe('suite test class Name', function() {
  it(`test name 'undefined',the valid() 
    function have to returned false`, function() {
    expect(Name.valid('undefined')).toEqual(false);
  });
  it(`if send a name valid, the method valid() 
      have to returned true`, function() {
    expect(Name.valid('jonas florencio')).toEqual(true);
  });
  it(`if send name is empty string , the method valid() 
      have to return false`, function() {
    expect(Name.valid(' ')).toEqual(false);
  });
  it('test if method valid(), is a method static', function() {
    expect(Name.hasOwnProperty('valid')).toEqual(true);
  });
});
