import Mongoose from 'mongoose'

// Model
const Schema = Mongoose.Schema
const manifestSchema = new Schema({
    MPDFile: String,
    audios: [{ language: String, quality: String }],
    subtitles: [{ language: String }]
})

// Services
// ...

export const Manifest = Mongoose.model("manifests", manifestSchema)