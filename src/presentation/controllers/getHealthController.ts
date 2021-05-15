import GetAppHealth from 'app/usecases/getAppHealth';
import { Controller } from 'presentation/contracts/controller';
import { HttpResponse } from 'presentation/contracts/http';

export default class HealthController implements Controller {
  private getAppHealth: GetAppHealth;

  constructor(getAppHealth: GetAppHealth) {
    this.getAppHealth = getAppHealth;
  }

  async handle(): Promise<HttpResponse> {
    const { isHealthy, dbConnectionStatus, dateTime } = await this.getAppHealth.execute();

    const statusCode = isHealthy ? 200 : 500;
    const body = {
      date_time: dateTime,
      db_connection: dbConnectionStatus,
    };

    return { body, statusCode };
  }
}
