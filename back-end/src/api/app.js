const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const {
  testRouter,
  userRouter,
  trackerRouter

} = require('./router');

app.use(bodyParser.json());
app.use(cors());

app.use(testRouter);
app.use(userRouter)
app.use(trackerRouter)

module.exports = app;