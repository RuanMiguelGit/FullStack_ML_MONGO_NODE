const express = require('express');

const testController = require('../Controller/testController');
const userController = require('../Controller/User')
const trackerController = require('../Controller/Tracker')

const testRouter = express.Router();
const userRouter = express.Router()
const trackerRouter = express.Router()

testRouter.get('/', testController.test);


userRouter.post('/user', userController.createUser)
userRouter.get('/user', userController.getAllusers)
userRouter.post('/login', userController.login)

trackerRouter.get('/tracker', trackerController.getAllTrackedInfo)
trackerRouter.post('/tracker', trackerController.registerUsage)

module.exports = {
    testRouter,
    userRouter,
    trackerRouter
};