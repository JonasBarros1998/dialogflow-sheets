import express from 'express';
import {router} from './routes/_registry-router';
import cors from 'cors';
import env from '../../../env.json';

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

app.listen(port, function() {
  console.log(`server address: http://localhost:${port}`);
});

export default app;
