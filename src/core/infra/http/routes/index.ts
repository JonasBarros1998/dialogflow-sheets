import express from 'express';
import router from './send/send.route';
import {receiverRouter} from './receiver/Receiver.route';
import {routerAuth} from './auth/authentication.route';

const app = express();

app.use('/receiver', receiverRouter);
app.use('/send', router);
app.use('/authentication', routerAuth);

export {router, receiverRouter, routerAuth};
