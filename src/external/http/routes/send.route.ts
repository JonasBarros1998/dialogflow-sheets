import {Router, Response, Request} from 'express';
import RouterAdapter from '../../../main/adapters/RouterAdapter';

const router = Router();

router.post('/send', async function(request: Request, response: Response) {
  const routerAdapter = new RouterAdapter();
  const router = await routerAdapter.send(request, response);
  return router;
});

export default router;
