import {Router} from 'express';
import Send from '../../../../../adapters/controllers/send/Send';

const router = Router();

router.post('/send', async function(request, response) {
  const send = new Send(request, response);
  return send.sendData();
});

export default router;
