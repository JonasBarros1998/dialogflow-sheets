import Name from './Name';
import Description from './Description';
import Email from './Email';
import Phone from './Phone';

class Chatbot {
  constructor(readonly name: Name, readonly description: Description,
              readonly email: Email, readonly phone: Phone) {
    this.name = name;
    this.description = description;
    this.email = email;
    this.phone = phone;
    Object.freeze(this);
  }
}

export default Chatbot;
