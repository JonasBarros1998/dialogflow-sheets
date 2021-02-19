import express from 'express';
import router from './send/send.route';
import {receiverRouter} from './receiver/Receiver.route';

const app = express();

app.use('/receiver', receiverRouter);
app.use('/send', router);

export {router, receiverRouter};
