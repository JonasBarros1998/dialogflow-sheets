import {Router} from 'express';
import env from '../../../../../../env.json';
import SendController from '../../../../controllers/send/SendController';

// eslint-disable-next-line new-cap
const router = Router();

router.post('/send', async function(request, response) {
  request.body = {
    'values': [[request.body.queryResult.queryText]],
    'range': 'A1',
    'spreedSheetId': env.sheet.spreadsheet_id,
    'majorDimension': 'ROWS',
    'valueInputOption': 'RAW',
  };
  const sendController = new SendController(request, response);
  const responseGoogleSheets = await sendController.sendGoogleSheets();
  return response.json(responseGoogleSheets);
});

export default router;
