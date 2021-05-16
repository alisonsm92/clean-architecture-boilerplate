import GetAppHealth from 'app/usecases/getAppHealth';
import GetHealthController from 'presentation/controllers/getHealthController';
import GenericDBManager from 'infra/database/genericDBManager';

export default function makeGetHealthController() :GetHealthController {
  const genericDBManager = GenericDBManager.getInstance();
  const getAppHealth = new GetAppHealth(genericDBManager);
  return new GetHealthController(getAppHealth);
}
