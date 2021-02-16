import express from 'express';
import {router, receiverRouter} from './routes/index';
// eslint-disable-next-line max-len
// import GoogleAuthentication from '../../../modules/authentication/GoogleAuthentication';

const app = express();
const port = 3333;

app.use(router);
app.use(receiverRouter);
app.use(express.json());

app.listen(port, function() {
  console.log('server address: http://localhost:3333');
  // const googleAuthentication = new GoogleAuthentication();
  // const auth = googleAuthentication.auth();
  // googleAuthentication.listMajors(auth);
});

export default app;
