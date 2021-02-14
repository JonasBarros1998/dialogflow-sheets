import express from 'express';
import router from './modules/Send';
import {receiverRouter} from './modules/Receiver';

const app = express();

app.use('/receiver', receiverRouter);
app.use('/send', router);

export {router, receiverRouter};
