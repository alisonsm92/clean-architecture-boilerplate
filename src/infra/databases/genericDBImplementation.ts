import Database, { ConnectionStatus } from 'app/contracts/database';

export default class GenericDBImplementation implements Database {
  private connection: boolean;

  constructor() {
    this.connection = false;
  }

  /**
   * Returns database connection status
   */
  async getConnectionStatus() :Promise<ConnectionStatus> {
    try {
      // Test database connection
      if (!this.connection) return ConnectionStatus.Off;
      return ConnectionStatus.On;
    } catch (e) {
      return ConnectionStatus.Off;
    }
  }

  /**
   * Initialize Database connection
   */
  async initialize() :Promise<void> {
    this.connection = true;
    // connection configuration
    // event listeners
  }
}
