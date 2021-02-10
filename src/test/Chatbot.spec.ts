import Chatbot from '../core/domain/Chatbot';

describe('Class domain Chatbot ', function() {
  it('expect a user e-mail in a property of class Chatbot', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com', '(11)963582924');
    expect(chatbot.accessEmail).toEqual('jonas_barros@outlook.com');
  });

  it('expect phone number in a property of class Chatbot', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com', '11963582924');
    expect(chatbot.accessPhone).toEqual('11963582924');
  });

  it('expect the variable chatbot is instance of class Chatbot', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com', '11963582924');
    expect(chatbot).toBeInstanceOf(Chatbot);
  });

  it('', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com', '11963582924');
    console.log(chatbot);
  });
});
