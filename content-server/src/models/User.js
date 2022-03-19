import Mongoose from 'mongoose'

// Model
const Schema = Mongoose.Schema
const userSchema = new Schema({
    login: String,
    passwd: String,
    name: String,
    active: Boolean,
    preferences: {
        preferredAudioLanguage: String,
        preferredCaptionLanguage: String
    }
})

// Services
// ...

export const User = Mongoose.model("users", userSchema)