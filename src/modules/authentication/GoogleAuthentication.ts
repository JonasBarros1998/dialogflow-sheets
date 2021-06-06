import {google, Auth} from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

class GoogleAuthentication {
  private authorize(): Auth.OAuth2Client {
    const googleAuth: Auth.OAuth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URIS);

    googleAuth.setCredentials({
      access_token: process.env.ACCESS_TOKEN,
      refresh_token: process.env.REFRESH_TOKEN,
      scope: process.env.SCOPE,
      token_type: process.env.TOKEN_TYPE,
      expiry_date: Number(process.env.EXPIRY_DATE),
    });
    return googleAuth;
  }

  auth(): Auth.OAuth2Client {
    return this.authorize();
  }
}

export default GoogleAuthentication;
