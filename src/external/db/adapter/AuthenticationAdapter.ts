import {Auth} from 'googleapis';
import {IAuthentication} from '../interfaces/IAuthentication';
import GoogleAuthentication from '../../../modules/authentication/GoogleAuthentication';

class AuthenticationAdapter implements IAuthentication {
  private googleAuthentication: GoogleAuthentication;

  constructor() {
    this.googleAuthentication = new GoogleAuthentication();
  }

  authenticationUser(): Auth.OAuth2Client {
    return this.googleAuthentication.auth();
  }
}

export default AuthenticationAdapter;
