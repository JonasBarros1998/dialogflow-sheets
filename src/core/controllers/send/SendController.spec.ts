/* eslint-disable max-len */
import {request, response} from 'express';
import SendController from './SendController';
import env from '../../../../env.json';

describe('controller SendController', function() {
  request.body = {
    values: [
      ['jonas', 'barros'],
      ['computador', 'teclado'],
    ],
    range: 'A1',
    spreedSheetId: env.sheet.spreadsheet_id,
    majorDimension: 'ROWS',
    valueInputOption: 'RAW',
  };
  it('success send data for google sheets', async function() {
    const sendController = new SendController(request, response);
    const sendDatas = await sendController.sendGoogleSheets();
    expect(sendDatas).toMatchObject({message: 'Dados adicionados com sucesso', status: true});
  });
  it('error send data for google sheets', async function() {
    request.body.majorDimension = '';
    const sendController = new SendController(request, response);
    const sendDatas = await sendController.sendGoogleSheets();
    expect(sendDatas).toMatchObject({message: 'Não foi possível salvar os dados', status: false});
  });
});
