import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
    name: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})
mongoose.model('User', UserSchema)
module.exports = mongoose.model('User')