import {Validation} from './interface/validation';
import Description from '../entity/Description';
import {Message} from './interface/Error';

class MaxLength implements Validation {
  private descriptionClient: Description
  constructor(description: string) {
    this.descriptionClient = new Description(description);
  }

  valid(): Message {
    try {
      this.length();
    } catch (e) {
      if (e instanceof Error) {
        const messageError: Message = {status: false,
          message: e.message,
          stacktrace: e.stack};
        return messageError;
      }
      const messageErrorStack: Message = {status: false,
        message: e.message,
        stacktrace: e};
      return messageErrorStack;
    }
    const messageSucess: Message = {status: true, message: 'sucess'};
    return messageSucess;
  }

  private length(): void {
    if (this.descriptionClient.description.length <= this.descriptionClient.maxLength) {
      throw new Error(`The Property description is less 300 characters`);
    }
  }
}

export default MaxLength;
