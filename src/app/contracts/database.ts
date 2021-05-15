import ConnectionStatus from 'domain/models/ConnectionStatus';

export default interface Database {
  getConnectionStatus(): Promise<ConnectionStatus>;
  initialize(): Promise<void>;
}

export { ConnectionStatus };
