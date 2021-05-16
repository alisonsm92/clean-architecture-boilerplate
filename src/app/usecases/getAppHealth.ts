import GetHealth from 'domain/usecases/getHealth';
import Database from 'app/contracts/database';
import { HealthInfo, ConnectionStatus } from 'domain/models/healthInfo';

export default class GetAppHealth implements GetHealth {
  private genericDBManager: Database;

  constructor(genericDBManager: Database) {
    this.genericDBManager = genericDBManager;
  }

  /**
   * Returns true if database connection is online
   */
  private static getDBConnectionStatus(isDBConnected : boolean) :ConnectionStatus {
    if (isDBConnected) return ConnectionStatus.On;
    return ConnectionStatus.Off;
  }

  /**
   * Checks external dependencies connection status and returns the application health summary
   */
  async execute(): Promise<HealthInfo> {
    const isDBConnected = await this.genericDBManager.isConnected();
    const isHealthy = isDBConnected;
    const dbConnectionStatus = GetAppHealth.getDBConnectionStatus(isDBConnected);
    const dateTime = new Date();

    return { isHealthy, dbConnectionStatus, dateTime };
  }
}
