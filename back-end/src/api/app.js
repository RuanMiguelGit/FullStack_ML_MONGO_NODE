const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const {
  testRouter,
  userRouter
} = require('./router');

app.use(bodyParser.json());
app.use(cors());

app.use(testRouter);
app.use(userRouter)

module.exports = app;