import express from 'express';
import logger from "#config/logger.js";
import helmet from "helmet";
import morgan from 'morgan';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('combined', {stream: {write: (message) => logger.info(message.trim())}}));


app.get('/', (req, res) => {
  logger.info('Hello from Acquisitions!');
  res.status(200).send('Hello from Acquisitions!');
});

export default app;
