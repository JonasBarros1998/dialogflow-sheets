import express from 'express';
import {router, receiverRouter} from './routes/index';
import cors from 'cors';
import env from '../../../../env.json';

// eslint-disable-next-line max-len
// import GoogleAuthentication from '../../../modules/authentication/GoogleAuthentication';

const app = express();
const port = env.port;

const options: cors.CorsOptions = {
  methods: 'GET,POST',
  origin: env.domain,
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);
app.use(receiverRouter);

app.listen(port, function() {
  console.log(`server address: http://localhost:${port}`);
  // const googleAuthentication = new GoogleAuthentication();
  // const auth = googleAuthentication.auth();
  // googleAuthentication.listMajors(auth);
});

export default app;
