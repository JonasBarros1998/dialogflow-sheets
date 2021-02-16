/* eslint-disable max-len */
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
    const authToken: object = {
      'access_token': 'ya29.A0AfH6SMAj0UzwkZRW-vQOVwhMrb8KiC_Rpxol-P3PVICPdeHHRzGGcsDCx48yhObY0Sk06qU7pst_GjcqWLyePGzBnCg5c_ijWMZSNiHNfIvLdDdQGsmEza_2H6_E79u0qZHKcdyEckjjlDJnospO7eytfE26',
      'refresh_token': '1//0hIkcBwNZkST7CgYIARAAGBESNwF-L9IrGU8GgnHykb5KdbZgxE6uHrBVnTvT7fqwOyjmo4-p7qJB6aJH8o3w06BNlIHyVG3jtUQ',
      'scope': 'https://www.googleapis.com/auth/spreadsheets.readonly',
      'token_type': 'Bearer',
      'expiry_date': 1613351936644,
    };
    const googleAuth: Auth.OAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]);

    googleAuth.setCredentials(authToken);
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
