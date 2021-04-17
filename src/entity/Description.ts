class Description {
  constructor(readonly description: string) {
    this.description = description;
  }

  static valid(description: string) {
    if (typeof description === 'string' && description.length > 300) {
      return true;
    }
    return false;
  }
}

export default Description;
