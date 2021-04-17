import Email from './Email';

describe('suit test to class Entity Email', function() {
  it('if send invalid e-mail, the method valid() have to false', function() {
    expect(Email.valid('emailsecondary@outlookcom'))
        .toEqual(false);
  });
  it(`if send invalid e-mail with character ":" 
      the method valid() have to false`, function() {
    expect(Email.valid('emailse:condary@outlookcom'))
        .toEqual(false);
  });
  it(`if send invalid e-mail with character ";" 
      the method valid() have to false`, function() {
    expect(Email.valid('emailse;condary@outlookcom'))
        .toEqual(false);
  });
  it(`if send invalid e-mail with character "," 
      the method valid() have to false`, function() {
    expect(Email.valid('emailse.condary@outlookcom'))
        .toEqual(false);
  });
  it(`if send as valid e-mail, the method valid() have to true`, function() {
    expect(Email.valid('email_secondary@gmail.com.en'))
        .toEqual(true);
  });
  it(`if send e-mail with 15 digits 
      the method valid() have to false`, function() {
    expect(Email.valid('jon_bar@gmail.com'))
        .toEqual(false);
  });
});
