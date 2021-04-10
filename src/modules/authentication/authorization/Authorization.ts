/* eslint-disable camelcase */
import {google, Auth} from 'googleapis';
import {IData} from '../interfaces/IData';

class GoogleAuthorization {
  constructor(private credential: Promise<object>) {
    this.searchCrendetials();
  }

  private searchCrendetials() {
    this.credential
        .then((response:any) => {
          this.auth2Client(response);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  private auth2Client(credential: IData) {
    const {
      client_id,
      client_secret,
    } = credential.web;
    const [redirectUri] = credential.web.redirect_uris;
    const googleAuth: Auth.OAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirectUri);
    googleAuth.setCredentials(googleAuth.credentials);
  }
}

export default GoogleAuthorization;
