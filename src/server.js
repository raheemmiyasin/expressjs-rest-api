import express from 'express'
import mongoose from 'mongoose'
import TaskController from './controllers/TaskController'
import UserController from './controllers/UserController'

mongoose.connect('mongodb://127.0.0.1:27017/appdb')

const app = express()
const port = process.env.PORT || 3000

// ADD THESE TWO LINES

app.use('/tasks', TaskController)
app.use('/users', UserController)

const server = app.listen(port, function () {
    console.log('Express server listening on port ' + port)
})