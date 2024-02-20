import userRouter from './routers/userRouter';
require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const expressSession = require('express-session');

const FileStore = require('session-file-store')(expressSession);

const app = express();

const { PORT } = process.env || 3004;

const storeConfig = {
  name: 'Dsh',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Session',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 1000,
    httpOnly: true,
  },
};

app.use(expressSession(storeConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT===> ${PORT}`);
});
