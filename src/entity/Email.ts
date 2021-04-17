/* eslint-disable max-len */
class Email {
  constructor(readonly email: string) {
    this.email = email;
  }

  static valid(email: string): boolean {
    if (typeof email === 'string' && email.length >= 20) {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const regexp = new RegExp(regex, 'gi');
      return regexp.test(email);
    }
    return false;
  }
}
export default Email;
