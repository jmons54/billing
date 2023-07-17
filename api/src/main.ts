import express from 'express';
import cors from 'cors';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: JSON.parse(process.env.CORS_ORIGIN),
  })
);

app.get('/ping', (_req, res) => {
  res.json('pong');
});

app.listen(port, () => {
  console.log(`Server run on https://api.local`);
});
