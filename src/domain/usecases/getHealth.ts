import ConnectionStatus from 'domain/models/ConnectionStatus';

export type HealthInfo = {
  isHealthy: boolean,
  dbConnectionStatus: ConnectionStatus,
  dateTime: Date
};

export default interface GetHealth {
  execute() :Promise<HealthInfo>
}
