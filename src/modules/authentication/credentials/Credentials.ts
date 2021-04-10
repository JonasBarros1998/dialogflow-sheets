import {IFileEnvironments} from '../interfaces/IFileEnvironment';

class Credentials {
  private checkfileEnv: IFileEnvironments;
  readonly credential: Promise<Object>
  constructor(checkfileEnv: IFileEnvironments) {
    this.checkfileEnv = checkfileEnv;
    this.credential = this.checkfileEnv.checkFile();
    this.file();
  }

  private file(): void {
    this.checkfileEnv.checkFile()
        .then( async (response) => {
          this.checkCredentialWeb(response);
        })
        .catch((error) => console.error(error));
  }

  private checkCredentialWeb(credentialWeb: object):void {
    if (typeof(credentialWeb) !== 'object') {
      throw new TypeError(`A propriedade web é ${typeof credentialWeb}.
      As credenciais de acesso não foram adicionadas dentro do object 
      web no arquivo env.json localizado na raiz do projeto, por favor, 
      crie as credenciais de autorização AUTH e adicione dentro do objeto 
      web no arquivo env.json`);
    }
  }
}

export default Credentials;
