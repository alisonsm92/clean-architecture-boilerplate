import ConnectionStatus from './connectionStatus';

/**
 * Return true if database connection is online
 */
export default function isAppHealthy(dbConnectionStatus : ConnectionStatus) :boolean {
  return dbConnectionStatus === ConnectionStatus.On;
}
