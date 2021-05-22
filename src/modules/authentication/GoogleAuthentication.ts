import auth from '../../../env.json';
import {google, Auth} from 'googleapis';

class GoogleAuthentication {
  private authorize(): Auth.OAuth2Client {
    // eslint-disable-next-line camelcase
    const {client_secret, client_id, redirect_uris} = auth.web;
    const googleAuth: Auth.OAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]);

    googleAuth.setCredentials(auth.credentials);
    return googleAuth;
  }

  auth(): Auth.OAuth2Client {
    return this.authorize();
  }
}

export default GoogleAuthentication;
