import fs from 'fs';
import {googleapis} from '../../../../googleapi.config';
import {IData} from '../interfaces/IData';

class CheckCredentials {
  private checkPathFileEnv: string;
  /**
   * @constructor
   */
  constructor() {
    this.checkPathFileEnv = `${googleapis.currentFile}/env.json`;
  }
  async check(): Promise<object|void> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.checkPathFileEnv, 'utf-8', (err, data) => {
        if (err) return reject(this.checkFileError(err));
        return resolve(this.checkFileSucess(data));
      });
    });
  }
  private async checkFileError(err: object) {
    throw new Error(`O arquivo .env.json não foi localizado na raiz do projeto. 
    Crie o arquivo env.json na raiz do projeto`);
  }
  private checkFileSucess(data: string): object {
    const {web}: IData = JSON.parse(data);
    this.checkCredentialWeb(web);
    return web;
  }
  private checkCredentialWeb(web: object):void {
    if (typeof(web) !== 'object') {
      throw new TypeError(`A propriedade web é ${typeof web}.
      As credenciais de acesso não foram adicionadas dentro do object 
      web no arquivo env.json localizado na raiz do projeto, por favor, 
      crie as credenciais de autorização AUTH e adicione dentro do objeto 
      web no arquivo env.json`);
    }
  }
}

export default CheckCredentials;
