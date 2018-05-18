import {
    Router
} from 'express'
import User from '../models/User'
import bodyParser from 'body-parser'

const router = Router()

router.use(bodyParser.urlencoded({
    extended: true
}))

router.use(bodyParser.json())

// CREATES A NEW USER
router.post('/', (req, res) => {
    User.create({
            name: 'John Doe'
        },
        (err, user) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database.")
            res.status(200).send(user)
        })
})
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send("There was a problem finding the users.")
        res.status(200).send(users)
    })
})

module.exports = router