import express from 'express';
import router from './send.route';

const app = express();

app.use('/send', router);

export {router};
