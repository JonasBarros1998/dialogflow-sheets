/* eslint-disable require-jsdoc */
import
CheckEnvironments
  from '../../modules/authentication/checkEnvironments/CheckEnvironments';
import Credentials from '../../modules/authentication/credentials/Credentials';
import
GoogleAuthorization
  from '../../modules/authentication/authorization/Authorization';

export function factoryAuthorization():void {
  const checkFileEnv = new CheckEnvironments();
  const credential = new Credentials(checkFileEnv);
  new GoogleAuthorization(credential.credential);
  return;
}
