/* eslint-disable camelcase */
import {google, Auth} from 'googleapis';
import {IData} from '../interfaces/IData';

class GoogleAuthorization {
  constructor(private credential: Promise<object>) {}

  async searchCrendetials():Promise<Auth.OAuth2Client | void> {
    return await this.credential
        .then((response:any) => {
          return this.auth2Client(response);
        })
        .catch(function(error) {
          console.error(error);
        });
  }

  private auth2Client(credential: IData): Auth.OAuth2Client {
    const {
      client_id,
      client_secret,
    } = credential.web;
    const [redirectUri] = credential.web.redirect_uris;
    const oauth2: Auth.OAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirectUri);

    oauth2.setCredentials(oauth2.credentials);
    return oauth2;
  }
}


export default GoogleAuthorization;
