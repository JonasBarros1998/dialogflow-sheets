import express from 'express';
import {router} from './routes/_registry-router';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT;

const options: cors.CorsOptions = {
  methods: 'GET,POST',
  origin: process.env.DOMAIN,
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(port, function() {
  console.log(`server address: http://localhost:${port}`);
});

export default app;
