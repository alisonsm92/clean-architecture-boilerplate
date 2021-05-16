import { HealthInfo } from 'domain/models/healthInfo';

export default interface GetHealth {
  execute() :Promise<HealthInfo>
}
