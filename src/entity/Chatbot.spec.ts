/* eslint-disable max-len */

import Chatbot from './Chatbot';

describe('Test class Chatbot ', function() {
  it('expect return property', function() {
    const chatbot = new Chatbot('First Name', 'first_email@outlook.com',
        '(11)963582924', 'create chatbot');
    const prospect = {
      name: chatbot.name,
      email: chatbot.email,
      phone: chatbot.phone,
      description: chatbot.description,
    };
    expect(prospect).toEqual({
      name: 'First Name',
      email: 'first_email@outlook.com',
      phone: '(11)963582924',
      description: 'create chatbot',
    });
  });
});
