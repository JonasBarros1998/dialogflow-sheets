import fs from 'fs';
import {IFileEnvironments} from '../interfaces/IFileEnvironment';
import {googleapis} from '../../../../googleapi.config';

class CheckEnvironments implements IFileEnvironments {
  private checkPathFileEnv: string

  constructor() {
    this.checkPathFileEnv = `${googleapis.currentFile}/env.json`;
  }

  async checkFile(): Promise<object> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.checkPathFileEnv, 'utf-8', (err, data) => {
        if (err) return reject(err);
        const datas = JSON.parse(data);
        resolve({web: datas.web});
      });
    });
  }
}

export default CheckEnvironments;
