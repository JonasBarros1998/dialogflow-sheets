import {IFileEnvironments} from '../interfaces/IFileEnvironment';

class Credentials {
  private checkfileEnv: IFileEnvironments;
  constructor(checkfileEnv: IFileEnvironments) {
    this.checkfileEnv = checkfileEnv;
  }

  file() {
    this.checkfileEnv.checkFile()
        .then((response) => {
          this.checkCredentialWeb(response);
        });
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

export default Credentials;
