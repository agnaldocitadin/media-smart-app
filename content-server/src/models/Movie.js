import Mongoose from 'mongoose'
import { Translation, Images } from './Types'

// Model
const Schema = Mongoose.Schema
const movieSchema = new Schema({
    trailerManifest: { type: Schema.Types.ObjectId, ref: "manifests" },
    releaseManifest: { type: Schema.Types.ObjectId, ref: "manifests" },
    title: [Translation],
    genres: [{ type: Schema.Types.ObjectId, ref: "genres" }],
    releaseYear: Number,
    rating: String,
    stars: Number,
    videoQuality: String,
    audioQuality: String,
    synopsis: [Translation],
    images: [Images]
})

// Services
// ...

export const Movie = Mongoose.model("movies", movieSchema)