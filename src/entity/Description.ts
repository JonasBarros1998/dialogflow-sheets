class Description {
  readonly maxLength = 300;

  constructor(readonly description: string) {
    this.description = description;
    this.maxLength = 300;
  }

  static valid(description: string) {
    if (typeof description === 'string') {
      return true;
    }
    return false;
  }
}

export default Description;
