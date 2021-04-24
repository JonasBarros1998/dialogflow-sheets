import {Validation} from './interface/validation';
import Description from '../entity/Description';

class MaxLength implements Validation {
  private descriptionClient: Description
  constructor(description: string) {
    this.descriptionClient = new Description(description);
  }

  valid(): boolean | string {
    try {
      this.length();
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
      return e;
    }
    return true;
  }

  private length(): void {
    if (this.descriptionClient.description.length <= this.descriptionClient.maxLength) {
      throw new Error(`The Property description is less 300 characters`);
    }
  }
}

export default MaxLength;
