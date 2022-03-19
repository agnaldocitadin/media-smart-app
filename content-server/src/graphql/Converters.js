// import { MediaClipTypes, ImageTypes } from 'libstream'
import { MediaClipTypes, ImageTypes } from '../../../libstream/src/Enums'
import i18n from '../globals/i18n'

const findImage = (images, format, locale) => {
    let found = images.find(image => image.format === format && image.language === locale)
    if (found) {
        return found.path
    }
    return ""
}

const translate = (value, locale) => {
    const translated = value.find(translation => translation.language === locale)
    if (!translated) {
        // default
        return value.find(translation => translation.language === "en_US").text
    }
    return translated.text
}

export const Converter = {

    toManifestGraphql: (manifest, locale) => {
        return {
            MPDFile: manifest.MPDFile,
            audios: manifest.audios.map(audio => {
                return {
                    ...audio._doc,
                    name: i18n.t(audio.language, { lng: locale })
                }
            }),
            subtitles: manifest.subtitles.map(subtitle => {
                return {
                    ...subtitle._doc,
                    name: i18n.t(subtitle.language, { lng: locale })
                }
            }),
            progress: 0
        }
    },

    movieToMediaClip: (movies, locale) => {

        const parse = (movie) => {
            return {
                _id: movie._id,
                type: MediaClipTypes.MOVIE.value,
                trailerManifest: Converter.toManifestGraphql(movie.trailerManifest, locale),
                releaseManifest: Converter.toManifestGraphql(movie.releaseManifest, locale),
                title: translate(movie.title, locale),
                synopsis: translate(movie.synopsis, locale),
                videoQuality: movie.videoQuality,
                audioQuality: movie.audioQuality,
                releaseYear: movie.releaseYear,
                stars: movie.stars,
                rating: movie.rating,
                logo: findImage(movie.images, ImageTypes.LOGO, locale),
                thumbnail: findImage(movie.images, ImageTypes.THUMBNAIL, locale),
                poster: findImage(movie.images, ImageTypes.POSTER, locale)
            }
        }

        if (movies instanceof Array) {
            return movies.map(movie => parse(movie))
        }

        return parse(movies)
    },

    tvShowsToMediaClip: (tvShows, locale) => {

        const parseSubMediaClipInfo = (episodes) => {
            return episodes.map(episode => {
                return {
                    releaseManifest: Converter.toManifestGraphql(episode.releaseManifest),
                    synopsis: translate(episode.synopsis, locale),
                    title: translate(episode.title, locale),
                    number: episode.number,
                    duration: episode.duration,
                    preview: episode.preview[0].path //TODO ver como fazer
                }
            })
        }

        const parseSubMediaClip = (seasons) => {
            return seasons.map((season, key) => {
                return {
                    number: key + 1,
                    mediaClips: parseSubMediaClipInfo(season.episodes)
                }
            })
        }

        const parse = (tvShow) => {
            return {
                _id: tvShow._id,
                type: MediaClipTypes.TV_SHOW.value,
                trailerManifest: Converter.toManifestGraphql(tvShow.trailerManifest),
                title: translate(tvShow.title, locale),
                synopsis: translate(tvShow.synopsis, locale),
                videoQuality: tvShow.videoQuality,
                audioQuality: tvShow.audioQuality,
                releaseYear: tvShow.releaseYear,
                rating: tvShow.rating,
                logo: findImage(tvShow.images, ImageTypes.LOGO, locale),
                thumbnail: findImage(tvShow.images, ImageTypes.THUMBNAIL, locale),
                poster: findImage(tvShow.images, ImageTypes.POSTER, locale),
                subMediaClips: parseSubMediaClip(tvShow.seasons)
            }
        }

        if (tvShows instanceof Array) {
            return tvShows.map(tvShow => parse(tvShow))
        }

        return parse(tvShows)
    },

    liveChannelsToMediaClip: (channels, locale) => {

        const parseTimeline = (programGuide) => {
            return programGuide.map(program => {
                return {
                    name: translate(program.name, locale),
                    description: translate(program.description, locale),
                    startTime: program.startTime,
                    endTime: program.endTime
                }
            })
        }

        const parse = (channel) => {
            return {
                _id: channel._id,
                type: MediaClipTypes.LIVE_CHANNEL.value,
                releaseManifest: Converter.toManifestGraphql(channel.liveManifest),
                title: channel.name,
                // synopsis: String!
                videoQuality: "HD",
                audioQuality: "Stereo",
                releaseYear: 2019,
                // rating: String
                // extraInfo: String
                timeline: parseTimeline(channel.programGuide),
                logo: findImage(channel.images, ImageTypes.LOGO, locale),
                thumbnail: findImage(channel.images, ImageTypes.THUMBNAIL, locale),
                poster: findImage(channel.images, ImageTypes.POSTER, locale)
                // subMediaClips: [MediaClipGroup]
            }
        }

        if (channels instanceof Array) {
            return channels.map(channel => parse(channel))
        }

        return parse(channels)
    }

}

