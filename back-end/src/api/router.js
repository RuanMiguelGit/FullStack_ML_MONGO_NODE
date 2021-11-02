const express = require('express');

const testController = require('./Controller/testController');

const testRouter = express.Router();

testRouter.get('/', testController.test);


module.exports = {
    testRouter,
};