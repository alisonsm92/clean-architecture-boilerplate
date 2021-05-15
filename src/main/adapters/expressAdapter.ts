import { Request, Response } from 'express';
import { Controller } from '../../presentation/contracts/controller';

/**
 * Adapts controllers to framework ExpressJS
 */
export default function adapt(controller: Controller) {
  return async (req: Request, res: Response) :Promise<void> => {
    const httpRequest = {
      headers: req.headers,
      params: req.params,
      body: req.body,
    };

    const responseHttp = await controller.handle(httpRequest);

    res.status(responseHttp.statusCode).json(responseHttp.body);
  };
}
