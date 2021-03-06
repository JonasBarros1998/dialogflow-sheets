import {Message} from '../../../useCase/interface/Error';
import InvalidParam from '../../../shared/err/InvalidParam';

class Parameters {
  valid(client, validInputOption, range, dimension): Message {
    try {
      this.validParamClient(client);
      this.validParamValidInputOption(validInputOption);
      this.validParamRange(range);
      this.validParamDimension(dimension);
    } catch (e) {
      if (e instanceof InvalidParam) {
        return {status: false, message: e.message};
      }
      return {status: false, message: e.message, stacktrace: e};
    }
    return {status: true, message: 'sucess'};
  }

  private validParamClient(client: any) {
    if (typeof client === 'object') {
      throw new InvalidParam(`The property client is ${typeof client}`);
    }
  }

  private validParamValidInputOption(validInputOption: any) {
    if (typeof validInputOption === 'string') {
      throw new InvalidParam(`The property client is ${typeof validInputOption}`);
    }
  }

  private validParamRange(range: any) {
    if (typeof range === 'string') {
      throw new InvalidParam(`The property client is ${typeof range}`);
    }
  }

  private validParamDimension(dimension: any) {
    if (typeof dimension === 'string') {
      throw new InvalidParam(`The property client is ${typeof dimension}`);
    }
  }
}

export default Parameters;
