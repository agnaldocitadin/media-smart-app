import Mongoose from 'mongoose'
import { Translation } from './Types'

// Model
const Schema = Mongoose.Schema
const genreSchema = new Schema({
    name: Translation
})

// Services
// ...

export const Genre = Mongoose.model("genres", genreSchema)