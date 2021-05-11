import { Database, ConnectionStatus } from 'infra/contracts/database';

export type HealthInfo = {
  isHealthy: boolean,
  dbConnectionStatus: ConnectionStatus,
  dateTime: Date
};

export default interface GetHealth {
  database: Database,
  execute() :Promise<HealthInfo>
}
