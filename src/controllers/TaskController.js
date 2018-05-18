import {
    Router
} from 'express'
import Task from '../models/Task'
import bodyParser from 'body-parser'

const router = Router()

router.use(bodyParser.urlencoded({
    extended: true
}))

router.use(bodyParser.json())

// CREATES A NEW TASK
router.post('/', (req, res) => {
    Task.create({
            name: 'Task',
            status: 'new'
        },
        (err, task) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database.")
            res.status(200).send(task)
        })
})
// RETURNS ALL THE TASKS IN THE DATABASE
router.get('/', (req, res) => {

    Task.find({}, (err, tasks) => {
        if (err) return res.status(500).send("There was a problem finding the users.")
        res.status(200).send(tasks)
    })

})

module.exports = router