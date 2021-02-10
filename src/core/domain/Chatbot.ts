/* eslint-disable max-len */
/**
 * @class
 * @argument {string} nome
 * @argument {string} telefone
 */
class Chatbot {
  private email: string;
  private phone: string;

  /**
    * @constructor
    * @param {string} email
    * @param {string} phone
  */
  constructor(email: string, phone: string) {
    this.email = email;
    this.phone = phone;
  }

  /**
  * @method
  * @return {string} return user e-mail
  */
  get accessEmail(): string {
    return this.email;
  }

  /**
   * @method
   * @return {string} telefone
   */
  get accessPhone(): string {
    return this.phone;
  }
  /**
   * Retorna email e telefone do usuário do chatbot
   * @method
   * @return {object}
   */
  contactInfo(): object {
    const userContact = Object.defineProperties({}, {
      'email': {
        value: this.email,
        enumerable: true,
        writable: false,
        configurable: false,
      },
      'phone': {
        value: this.phone,
        enumerable: true,
        writable: false,
        configurable: false,
      },
    });
    return userContact;
  }
}

export default Chatbot;
