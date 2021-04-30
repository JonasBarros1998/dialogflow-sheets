import MaxLength from './maxLength';
import Description from '../entity/Description';

const wrongText = `
  Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit. Nam metus massa, 
  aliquet eget vehicula aliquet, molestie et mauris.
  Vivamus risus metus, finibus ac est at, cursus 
  auctor arcu.Vivamus risus metus, finibus ac est at, cursus 
  auctor arcu.`;

const correctText = `
  Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit. Nam metus massa, 
  aliquet eget vehicula aliquet, molestie et mauris.
  Vivamus risus metus, finibus ac est at, cursus 
  auctor arcu. Vivamus risus metus, finibus ac est at, cursus 
  auctor arcu. Vivamus risus metus, finibus ac est at, cursus 
  auctor arcu.`;

describe('suite test class MaxLength', function() {
  it(`if description is less 300 characters, will return a message, 
    the type object`, function() {
    const description = new Description(wrongText);
    const maxLength = new MaxLength(description.description);
    expect(typeof maxLength.valid()).toEqual('object');
  });

  it(`if description is less 300 characters, will return a message, 
    explain the error`, function() {
    const description = new Description(wrongText);
    const maxLength = new MaxLength(description.description);
    const descriptionInvalid = maxLength.valid();
    const phrase = `The Property description is less 300 characters`;
    expect(descriptionInvalid.message).toEqual(
        expect.stringContaining(phrase));
  });

  it(`if send a description with bigger 300 characters, 
    the method valid will returned an object with follow properties 
    status, message`, function() {
    const description = new Description(correctText);
    const maxLength = new MaxLength(description.description);
    const validDescription = maxLength.valid();
    expect(validDescription.message)
        .toEqual(expect.stringMatching('sucess'));
    expect(validDescription.status).toBeTruthy();
  });
});
