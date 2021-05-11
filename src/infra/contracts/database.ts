import ConnectionStatus from 'domain/connectionStatus';

export default interface Database {
  getConnectionStatus(): Promise<ConnectionStatus>;
  initialize(): Promise<void>;
}
