/* eslint-disable max-len */
/**
 * @class
 * @argument {string} nome
 * @argument {string} telefone
 */
class Chatbot {
  private email: string;
  private phone: string;
  private response: object;

  /**
    * @constructor
    * @param {string} email
    * @param {string} phone
    * @param {string} response
  */
  constructor(email: string, phone: string, response: object) {
    this.email = email;
    this.phone = phone;
    this.response = response;
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
   * @method
   * @return {object}
   */
  get accessResponse(): object {
    return this.response;
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
