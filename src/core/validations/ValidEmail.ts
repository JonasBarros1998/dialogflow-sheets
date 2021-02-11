/* eslint-disable max-len */
/**
 * @abstract
 */
class ValidEmail {
  private email: string;

  /**
   * @constructor
   * @param {string} email
   */
  constructor(email: string) {
    this.email = email;
  }
  /**
   * Validar email do usuário
   * @method
   * @return {boolean}
   */
  isvalid(): boolean {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexp = new RegExp(regex, 'gi');
    return regexp.test(this.email);
  }
}

export default ValidEmail;
