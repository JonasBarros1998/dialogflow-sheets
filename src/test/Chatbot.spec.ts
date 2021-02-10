/* eslint-disable max-len */

import Chatbot from '../core/domain/Chatbot';

describe('Class domain Chatbot ', function() {
  it('expect a user e-mail in a property of class Chatbot', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com',
        '(11)963582924',
        {response: 'email: jonas_barros@outlook.com, telefone: 1159442756'});
    expect(chatbot.accessEmail).toEqual('jonas_barros@outlook.com');
  });

  it('expect phone number in a property of class Chatbot', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com',
        '11963582924',
        {response: 'email: jonas_barros@outlook.com, telefone: 1159442756'});
    expect(chatbot.accessPhone).toEqual('11963582924');
  });

  it('expect the variable chatbot is instance of class Chatbot', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com',
        '11963582924',
        {response: 'email: jonas_barros@outlook.com, telefone: 1159442756'});
    expect(chatbot).toBeInstanceOf(Chatbot);
  });

  it('expect response in a propety of class Chatbot', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com',
        '11963582924',
        {response: 'email: jonas_barros@outlook.com, telefone: 1159442756'});
    expect(chatbot.accessResponse)
        .toEqual({
          response: 'email: jonas_barros@outlook.com, telefone: 1159442756'});
  });

  it('expect to math object of user chatbot', function() {
    const chatbot = new Chatbot('jonas_barros@outlook.com',
        '11963582924',
        {response: 'email: jonas_barros@outlook.com, telefone: 1159442756'});
    expect(chatbot.contactInfo()).toMatchObject({
      'email': 'jonas_barros@outlook.com',
      'phone': '11963582924',
    });
  });
});
