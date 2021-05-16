export default interface Database {
  isConnected(): Promise<boolean>;
  getConnection(): unknown;
}
