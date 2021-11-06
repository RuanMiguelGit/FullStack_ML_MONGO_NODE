const express = require('express');

const testController = require('../Controller/testController');
const userController = require('../Controller/User')

const testRouter = express.Router();
const userRouter = express.Router()

testRouter.get('/', testController.test);
userRouter.post('/user', userController.createUser)
userRouter.get('/user', userController.getAllusers)

module.exports = {
    testRouter,
    userRouter
};