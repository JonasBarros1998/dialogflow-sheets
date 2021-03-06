class Phone {
  constructor(readonly phone: string) {
    this.phone = phone;
  }

  static valid(phone: string) {
    if (typeof phone === 'string' && phone.length >= 12) {
      const regex = /\(([0-9][0-9])\) [0-9]{5}-[0-9]{4}/gi;
      const regexp = new RegExp(regex, 'gi');
      return regexp.test(phone);
    }
    return false;
  }
}

export default Phone;
