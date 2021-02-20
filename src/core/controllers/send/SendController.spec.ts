/* eslint-disable max-len */
import {request, response} from 'express';
import SendController from './SendController';

describe('controller SendController', function() {
  request.body = {
    values: [
      ['jonas', 'barros'],
      ['computador', 'teclado'],
    ],
    range: 'A1',
    spreedSheetId: '1nrLfKR9Wac-qULzOvXUZPDPLO4Uy-gcfOCqOSz1-7B0',
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
