class CountClients {
  constructor() {}

  static total(clients: Array<[][]>) {
    return {
      clients,
      total: clients.length,
    };
  }
}

export default CountClients;
