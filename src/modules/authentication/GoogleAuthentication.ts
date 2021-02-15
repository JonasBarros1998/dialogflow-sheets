import auth from '../../../env.json';
import {google, Auth} from 'googleapis';

/**
 * @class
 */
class GoogleAuthentication {
  private credentialsWeb: object;
  /**
   * @constructor
   * @param {object} credentials
   */
  constructor() {
    this.credentialsWeb = auth;
  }
  /**
   * @method
   * @return {Auth.OAuth2Client}
   */
  private authorize(): Auth.OAuth2Client {
    // eslint-disable-next-line camelcase
    const {client_secret, client_id, redirect_uris} = auth.web;
    const googleAuth: Auth.OAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]);
    googleAuth.setCredentials(this.credentialsWeb);
    return googleAuth;
  }
  /**
   * @method
   * @param {Auth.OAuth2Client} googleAuth
   * @return {Auth.OAuth2Client}
   */
  auth(): Auth.OAuth2Client {
    return this.authorize();
  }
}

export default GoogleAuthentication;
