import {Message} from './Error';

export interface Validation {
  valid(): Message;
}
