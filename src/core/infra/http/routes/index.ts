import express from 'express';

import router from './modules/Send';

const app = express();

app.use('/send', router);

export {router};
