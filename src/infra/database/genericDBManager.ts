import Database from 'app/contracts/database';

type Connection = boolean; // Must change with the type of real database connection

export default class GenericDBManager implements Database {
  private static instance: GenericDBManager;

  private connection: Connection;

  private constructor(connection: Connection) {
    this.connection = connection;
  }

  /**
   * Initialize Database connection
   */
  static async initialize() :Promise<GenericDBManager> {
    // connection configuration
    // event listeners
    GenericDBManager.instance = new GenericDBManager(true);

    return GenericDBManager.instance;
  }

  /**
   * Returns the singleton instance
   */
  static getInstance() :GenericDBManager {
    if (!GenericDBManager.instance) {
      throw new Error('Must be initialized');
    }

    return GenericDBManager.instance;
  }

  /**
   * Returns the database connection
   */
  getConnection() :Connection {
    return this.connection;
  }

  /**
   * Returns database connection status
   */
  async isConnected() :Promise<boolean> {
    if (!this.connection) return false;
    return true;
  }
}
