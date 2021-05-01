/* eslint-disable camelcase */

import {google, sheets_v4} from 'googleapis';
import AuthenticationAdapter from './adapter/AuthenticationAdapter';
import {IAuthentication} from './interfaces/IAuthentication';

class CreateAutentication {
  private authentication: IAuthentication;
  constructor() {
    this.authentication = new AuthenticationAdapter();
  }

  auth2(): sheets_v4.Sheets {
    const credentials = this.authentication.authenticationUser();
    return google.sheets({version: 'v4', auth: credentials});
  }
}

export default CreateAutentication;
