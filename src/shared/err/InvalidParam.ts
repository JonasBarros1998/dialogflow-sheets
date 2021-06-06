class InvalidParam extends TypeError {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidParam';
  }
}

export default InvalidParam;
