import {IAddClient} from '../../../useCase/interface/iadd-client';
import AddClient from '../../../useCase/add-client';
import {IDataBase} from '../../gateway/IDataBase';
import DataBase from '../../../external/db/DataBase';
import {IClient} from '../../../entity/interfaces/IClient';

class Send {
  private addClient: IAddClient;
  private database: IDataBase;
  constructor(private request: Request, private response: Response) {
    this.database = new DataBase();
  }

  sendData() {
    if (typeof this.request.body !== null) {
      const body: IClient = this.request.body; 
      this.addClient = new AddClient(body, this.database);
    }
  }
}

export default Send;
