import express from 'express';

// eslint-disable-next-line new-cap
const receiverRouter = express.Router();

receiverRouter.get('/receiver', function(request, response) {
  return response.json({message: 'route: /receiver'});
});

export {receiverRouter};
