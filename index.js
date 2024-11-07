import express from 'express';
import cors from "cors";
import connectDB from "./dataBase.js";
import bodyParser from 'body-parser';

import UserRouter from "./routers/userRouter.js"
import linkRouter from "./routers/linkRouter.js"
import RedirectRouter from "./routers/RedirectRouter.js"
import SegmenationRouter from './routers/SegmenationRouter.js';
connectDB();
const app = express()
const port = 7000
app.use(cors());
app.use(bodyParser.json());
 app.use('/user', UserRouter);
 app.use('/link', linkRouter);
 app.use('/tinyurl', RedirectRouter);
 app.use('/segmenation', SegmenationRouter);

app.get('/',(req, res) => {
  res.send('Hello World!')
});
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })