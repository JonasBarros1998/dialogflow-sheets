class Name {
  constructor(readonly name: string) {
    this.name = name;
  }

  static valid(name: string) {
    const map = new Map();
    map.set('undefined', false);
    map.set('', false);
    if (typeof name !== 'string' || map.get(name.trim()) === false) {
      return false;
    }
    return true;
  }
}

export default Name;
