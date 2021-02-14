import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/send/google-sheets', function(request, response) {
  return response.json({message: 'route: /send/google-sheets'});
});

export default router;
