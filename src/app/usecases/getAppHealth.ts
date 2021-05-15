import Database, { ConnectionStatus } from 'app/contracts/database';
import GetHealth, { HealthInfo } from 'domain/usecases/getHealth';

export default class GetAppHealth implements GetHealth {
  private readonly database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  /**
   * Returns true if database connection is online
   */
  private static isAppHealthy(dbConnectionStatus : ConnectionStatus) :boolean {
    return dbConnectionStatus === ConnectionStatus.On;
  }

  /**
   * Checks external dependencies connection status and returns the application health summary
   */
  async execute(): Promise<HealthInfo> {
    const dbConnectionStatus = await this.database.getConnectionStatus();
    const isHealthy = GetAppHealth.isAppHealthy(dbConnectionStatus);
    const dateTime = new Date();

    return { isHealthy, dbConnectionStatus, dateTime };
  }
}
