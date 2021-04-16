class Name {
  constructor(readonly name: string) {
    this.name = name;
  }

  static valid(name: string) {
    const map = new Map();
    map.set('undefined', false);
    map.set(undefined, false);
    map.set('', false);
    if (map.get(name.trim()) === undefined) {
      return true;
    }
    return false;
  }
}

export default Name;
