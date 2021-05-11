import Database from 'infra/contracts/database';
import isAppHealthy from 'domain/appHealth';
import GetHealth, { HealthInfo } from 'domain/usecases/getHealth';

export default class GetAppHealth implements GetHealth {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  async execute(): Promise<HealthInfo> {
    const dbConnectionStatus = await this.database.getConnectionStatus();
    const isHealthy = isAppHealthy(dbConnectionStatus);
    const dateTime = new Date();

    return { isHealthy, dbConnectionStatus, dateTime };
  }
}
