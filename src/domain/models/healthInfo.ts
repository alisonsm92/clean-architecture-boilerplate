export enum ConnectionStatus {
  On = 'on',
  Off = 'off',
}

export type HealthInfo = {
  isHealthy: boolean,
  dbConnectionStatus: ConnectionStatus,
  dateTime: Date
};
