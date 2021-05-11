import { Database, ConnectionStatus } from 'infra/contracts/database';

export default class GenericDBImplementation implements Database {
  connection: boolean;

  constructor() {
    this.connection = false;
  }

  // Returns connection status
  async getConnectionStatus() :Promise<ConnectionStatus> {
    try {
      // Test database connection
      if (!this.connection) return ConnectionStatus.Off;
      return ConnectionStatus.On;
    } catch (e) {
      return ConnectionStatus.Off;
    }
  }

  // Initialize Database connection
  async initialize() :Promise<void> {
    this.connection = true;
    // connection configuration
    // event listeners
  }
}
