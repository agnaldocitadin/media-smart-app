import Connection from '../db/Connection';
import { ObjectID } from 'mongodb'
// import { ImageTypes } from 'libstream'
import { Movie } from '../models/Movie'
import { TvShow } from '../models/TvShow'
import { Manifest } from '../models/Manifest'
import { Genre } from '../models/Genre'
import { User } from '../models/User'
import { Converter } from './Converters'
import { ProgressService } from '../services/ProgressService'
import { LiveChannel } from '../models/LiveChannel'

import { criaMovies, criaTvShows, criaCanais, criaUsuario } from '../db/popula'


export const resolvers = {

    async authenticate({ login, passwd }) {
        return User.findOne({ login, passwd }).exec()
    },

    // OK
    async loadMainSections({ userID, locale }) {
        
        //load all movies
        let moviesPromise = Movie.find()
            .populate("trailerManifest")
            .populate("releaseManifest")
            .populate("genres")
            .exec()
            .then((movies) => {
                let clips = Converter.movieToMediaClip(movies, locale)
                let manifests = clips.map(clip => clip.releaseManifest)
                return ProgressService.populateManifests(manifests).then(() => clips)

            }).then(clips => {
                return [{
                    name: "Novos filmes",
                    mediaClips: clips
                }]
            })

        // load all TvShows
        let tvPromise = TvShow.find()
            .populate("trailerManifest")
            .populate("seasons.episodes.releaseManifest")
            .exec()
            .then(tvShows => {
                let clips = Converter.tvShowsToMediaClip(tvShows, locale)
                //TODO
                // let manifests = clips.map(clip => clip.subMediaClips.map(sub => sub.mediaClips.map(mc => mc.releaseManifest)))
                // console.log(">>00", manifests)
                // return ProgressService.populateManifests(manifests).then(() => clips)
                return clips

            }).then(clips => {
                return [{
                    name: "Séries em alta",
                    mediaClips: clips
                }]
            })

        let livePromise = LiveChannel.find()
            .populate("liveManifest")
            .exec()
            .then(channels => {
                let clips = Converter.liveChannelsToMediaClip(channels, locale)
                let manifests = clips.map(clip => clip.releaseManifest)
                return ProgressService.populateManifests(manifests).then(() => clips)

            }).then(clips => {
                return [{
                    name: "Canais ao vivo",
                    mediaClips: clips
                }]
            })
        
        let [ movies, tvShows, live ] = await Promise.all([ moviesPromise, tvPromise, livePromise ])
        return live.concat(tvShows).concat(movies)
    },

    // OK
    async loadMovieSuggestions({ userID, locale }) {
        return Movie.find()
            .populate("trailerManifest")
            .populate("releaseManifest")
            .exec()
            .then(movies => {
                let clips = Converter.movieToMediaClip(movies, locale)
                let manifests = clips.map(clip => clip.releaseManifest)
                return ProgressService.populateManifests(manifests).then(() => clips)

            }).then(clips => {
                return [{
                    name: "Só filmes",
                    mediaClips: clips
                }]
            })
    },

    // OK
    async loadTvShowSuggestions({ userID, locale }) {
        return TvShow.find()
            .populate("trailerManifest")
            .populate("seasons.episodes.releaseManifest")
            .exec()
            .then(tvShows => {
                let clips = Converter.tvShowsToMediaClip(tvShows, locale)
                // TODO popular progress
                return clips

            }).then(clips => {
                return [{
                    name: "Só Séries",
                    mediaClips: clips
                }]
            })
    },

    // OK
    async loadAvailableChannels({ userID, locale }) {
        return LiveChannel.find()
            .populate("liveManifest")
            .exec()
            .then(channels => {
                let clips = Converter.liveChannelsToMediaClip(channels, locale)
                let manifests = clips.map(clip => clip.releaseManifest)
                return ProgressService.populateManifests(manifests).then(() => clips)

            }).then(clips => {
                return [{
                    name: "Só canais",
                    mediaClips: clips
                }]
            })
    },

    async loadFavorites({userID, locale}) {
        // TODO
        return [
            { name: "Filmes", mediaClips: [] },
            { name: "Séries", mediaClips: [] },
            { name: "Canais", mediaClips: [] },
        ]
    },

    // TEMP
    cria() {
        // criaMovies()
        // criaTvShows()
        // criaCanais()
        // criaUsuario()

    //     let manifest = new Manifest({
    //         MPDFile: "/dev/manifest2.mpd",
    //         audios: [{ idx: 0, language: "pt_BR", quality: "5.1" }],
    //         subtitles: [{ idx: 0, language: "pt_BR" }]
    //     })

    //     let movie = new Movie({
    //         trailerManifest: ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
    //         releaseManifest: ObjectID.createFromHexString("5cd5a14159fbd54fcc08e2e4"),
    //         title: [{ language: "pt_BR", text: "Pacific Rim" }],
    //         genres: [ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")],
    //         releaseYear: 2018,
    //         rating: "PG-14",
    //         stars: 3,
    //         videoQuality: "HD",
    //         audioQuality: "5.1",
    //         synopsis: [{ language: "pt_BR", text: "Vai um texto aqui...." }],
    //         images: [{ 
    //             language: "pt_BR", 
    //             path: "/img/thumb.jpg", 
    //             size: "640x320",
    //             format: ImageTypes.THUMBNAIL
    //         }]
    //     })

    //     let genre = new Genre({
    //         name: { language: "pt_BR", text: "Comédia" }
    //     })

    //     let tvShow = new TvShow({
    //         trailerManifest: ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
    //         title: [{ language: "pt_BR", text: "Brooklin Nine-Nine" }],
    //         genres: [ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")],
    //         releaseYear: 2015,
    //         rating: "PG-14",
    //         stars: 4,
    //         videoQuality: "HD",
    //         audioQuality: "5.1",
    //         synopsis: [{ language: "pt_BR", text: "Texto da série" }],
    //         images: [{
    //             language: "pt_BR", 
    //             path: "/img/poster.jpg", 
    //             size: "640x320",
    //             format: ImageTypes.POSTER
    //         }],
    //         seasons: [{
    //             number: 0,
    //             episodes: [{
    //                 releaseManifest: ObjectID.createFromHexString("5cd5a14159fbd54fcc08e2e4"),
    //                 synopsis: [{ language: "pt_BR", text: "Texto do episódeo" }],
    //                 duration: 40,
    //                 preview: [{ size: "640x320", path: "/img/brooklin2.jpg" }]
    //             }]
    //         }]
    //     })

    //     let live = new LiveChannel({
    //         liveManifest: ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
    //         name: "SporTV",
    //         programGuide: [{
    //             name: [{ language: "pt_BR", text: "Sai de baixo" }],
    //             description: [{ language: "pt_BR", text: "Descricção do programa" }],
    //             startTime: "01:00",
    //             endTime: "01:45"
    //         }]  
    //     })

    //     // manifest.save()
    //     // movie.save()
    //     // genre.save()
    //     // tvShow.save()
    //     // live.save()

    }

}
    