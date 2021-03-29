/* eslint-disable max-len */
import {request, response} from 'express';
import SendController from './SendController';
import env from '../../../../env.json';
import {IBodyRequest} from './interface/IBodyRequest';

describe('controller SendController', function() {
  const requestBody: IBodyRequest = {
    values: [
      ['nome: Jonas florencio de barros, telefone: (00)90000-1111'],
    ],
    range: 'A1',
    spreadsheetId: env.sheet.spreadsheet_id,
    majorDimension: 'ROWS',
    valueInputOption: 'RAW',
  };
  request.body = requestBody;
  it('success send data for google sheets', async function() {
    const sendController = new SendController(request, response);
    const sendDatas = await sendController.sendGoogleSheets();
    expect(sendDatas).toMatchObject({message: 'Dados adicionados com sucesso', status: true});
  });
  // it('error send data for google sheets', async function() {
  //   request.body.majorDimension = '';
  //   const sendController = new SendController(request, response);
  //   const sendDatas = await sendController.sendGoogleSheets();
  //   expect(sendDatas).toMatchObject({message: 'Não foi possível salvar os dados', status: false});
  // });
});
