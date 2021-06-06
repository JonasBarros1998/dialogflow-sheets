class InvalidClient extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidClient';
  }
}

export default InvalidClient;
