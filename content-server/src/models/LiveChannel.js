import Mongoose from 'mongoose'
import { Manifest, Translation, Images } from './Types'

// Model
const Schema = Mongoose.Schema
const liveChannelSchema = new Schema({
    liveManifest: { type: Schema.Types.ObjectId, ref: "manifests" },
    name: String,
    images: [Images],
    programGuide: [{
        name: [Translation],
        description: [Translation],
        startTime: String,
        endTime: String
    }]
})

// Services
// ...

export const LiveChannel = Mongoose.model("live-channels", liveChannelSchema)