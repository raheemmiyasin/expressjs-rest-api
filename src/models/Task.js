import mongoose from 'mongoose'
const TaskSchema = new mongoose.Schema({
    name: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    status: String
})
mongoose.model('Task', TaskSchema)
module.exports = mongoose.model('Task')