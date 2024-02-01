require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

const indexRouter = require('./routers/indexRouter');

const { PORT } = process.env || 3004;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());
app.use(cors());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT===> ${PORT}`);
});
