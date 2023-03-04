import express from 'express';
import { Request, Response } from 'express';

const port = 3000;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

export { app };
