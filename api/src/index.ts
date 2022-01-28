import express from 'express';
import logger from 'morgan';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

const sampleJson = [
  { id: 1, title: 'タイトル1' },
  { id: 2, title: 'タイトル2' },
];

const frontDomain = process.env.REACT_DOMAIN || 'http://localhost/';
const allowedOrigins = [frontDomain];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());
app.use(logger('dev'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.json(sampleJson);
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
