import Mongoose from 'mongoose'
import { Translation, Images } from './Types'

// Model
const Schema = Mongoose.Schema
const tvShowSchema = new Schema({
    trailerManifest: { type: Schema.Types.ObjectId, ref: "manifests" },
    title: [Translation],
    genres: [{ type: Schema.Types.ObjectId, ref: "genres" }],
    releaseYear: Number,
    rating: String,
    stars: Number,
    videoQuality: String,
    audioQuality: String,
    synopsis: [Translation],
    images: [Images],
    seasons: [{
        number: Number,
        episodes: [{
            releaseManifest: { type: Schema.Types.ObjectId, ref: "manifests" },
            title: [Translation],
            number: Number,
            synopsis: [Translation],
            duration: Number,
            preview: [{ size: String, path: String }]
        }]
    }]
})

// Services
// ...

export const TvShow = Mongoose.model("tv-shows", tvShowSchema)