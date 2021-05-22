import {Router} from 'express';
import Send from '../../../adapters/controllers/send/Send';


const router = Router();

router.post('/send', async function(request, response) {
  const send = new Send(request.body, response);
  return send.sendData();
});

export default router;
