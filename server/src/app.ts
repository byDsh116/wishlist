import userRouter from './routers/userRouter';
import roomRouter from './routers/roomRouter';
import * as path from 'path';
import express from 'express';
import cors from 'cors';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
require('dotenv').config();

const FileStore = require('session-file-store')(expressSession);

const app = express();

const { PORT } = process.env || 3004;

declare module 'express-session' {
  export interface SessionData {
    username: string;
  }
}

const storeConfig = {
  name: 'Dsh',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Session',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 10 * 1000,
    httpOnly: false,
    path: '/',
  },
};

app.use(expressSession(storeConfig));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use('/user', userRouter);
app.use('/room', roomRouter);

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT===> ${PORT}`);
});
