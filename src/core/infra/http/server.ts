import express from 'express';
import {router} from './routes/index';

const app = express();
const port = 3333;

app.use(router);
app.use(express.json());

app.listen(port, function() {
  console.log('server address: http://localhost:3333');
});

export default app;
