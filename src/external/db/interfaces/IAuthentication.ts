import {Auth} from 'googleapis';

export interface IAuthentication {
  authenticationUser(): Auth.OAuth2Client
}
