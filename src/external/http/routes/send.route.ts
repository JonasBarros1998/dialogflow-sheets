import {Router, Response, Request} from 'express';
import RouterAdapter from '../../../main/adapters/RouterAdapter';

const router = Router();

router.post('/client', async function(request: Request, response: Response) {
  const routerAdapter = new RouterAdapter();
  const router = await routerAdapter.send(request, response);
  return router;
});

router.get('/client', async function(request: Request, response: Response) {
  const routerAdapter = new RouterAdapter();
  const router = await routerAdapter.list(request, response);
  return router;
});

export default router;
