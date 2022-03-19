import Mongoose from 'mongoose'

// Model
const Schema = Mongoose.Schema
const userProgressSchema = new Schema({
    manifest: { type: Schema.Types.ObjectId, ref: "manifests" },
    user: { type: Schema.Types.ObjectId, ref: "users" },
    minutes: Number
})

// Services
// ...

export const UserProgress = Mongoose.model("user-progress", userProgressSchema)