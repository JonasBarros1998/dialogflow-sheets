import Phone from './Phone';

describe('suit test the class Phone', function() {
  it(`if exist static method valid(), 
      the method hasOwnProperty is true`, function() {
    expect(Phone.hasOwnProperty('valid')).toEqual(true);
  });

  it('if send valid phone the method valid, will returned true', function() {
    expect(Phone.valid('(11) 90909-9090'));
  });

  it(`if send a phone with length 8 or less characteres the 
      function valid() have to returned false`, function() {
    const phone = `(11)945-876`;
    expect(Phone.valid(phone)).toEqual(false);
  });

  it(`if send a phone with no characteres "()", 
      the method valid() have to returned false`, function() {
    const phone = `11 96358-2924`;
    expect(Phone.valid(phone)).toEqual(false);
  });

  it(`it send a phone with no character '-', 
      the  method have to returned false`, function() {
    const phone = `(11) 963582924`;
    expect(Phone.valid(phone)).toEqual(false);
  });

  it(`if send phone no formated, the method valid(), will return false`, function() {
    const phone = `11123451234`;
    expect(Phone.valid(phone)).toEqual(false);
  });

  it(`substituted character '-' per '--' in phone, 
      the method valid() have to returned false`, function() {
    expect(Phone.valid('(11) 90909--9090')).toEqual(false);
  });
});
