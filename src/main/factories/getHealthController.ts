import GetAppHealth from 'app/usecases/getAppHealth';
import GenericDBImplementation from 'infra/database/genericDBImplementation';
import GetHealthController from 'presentation/controllers/getHealthController';

export default function makeGetHealthController() :GetHealthController {
  const database = new GenericDBImplementation();
  const getAppHealth = new GetAppHealth(database);
  return new GetHealthController(getAppHealth);
}
