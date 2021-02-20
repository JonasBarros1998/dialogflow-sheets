import express from 'express';
import
ReceiverController
  from '../../../../controllers/receiver/ReceiverController';

// eslint-disable-next-line new-cap
const receiverRouter = express.Router();

receiverRouter.get('/receiver', async function(request, response) {
  const receiverController = new ReceiverController(request, response);
  const receiverGoogleSheets = await receiverController.receiver();
  return response.json(receiverGoogleSheets);
});

export {receiverRouter};
