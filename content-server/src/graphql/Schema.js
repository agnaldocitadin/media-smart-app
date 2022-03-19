import { buildSchema } from 'graphql'

export const schema = buildSchema(`
    
    enum MediaClipTypes {
        MOVIE
        TV_SHOW
        LIVE_CHANNEL
    }

    type Audio {
        language: String!
        name: String!
        quality: String!
    }

    type Subtitle {
        language: String!
        name: String!
    }

    type Manifest {
        audios: [Audio]
        subtitles: [Subtitle]
        MPDFile: String!
        progress: Int
    }

    type Event {
        name: String!
        description: String
        startTime: String!
        endTime: String!
    }

    type SubMediaClipInfo {
        trailerManifest: Manifest
        releaseManifest: Manifest
        title: String!
        number: Int!
        synopsis: String!
        duration: Int!
        preview: String
    }

    type MediaClipGroup {
        number: Int!
        mediaClips: [SubMediaClipInfo]
    }

    type MediaClipInfo {
        _id: ID!
        type: MediaClipTypes!
        trailerManifest: Manifest
        releaseManifest: Manifest
        title: String!
        synopsis: String
        videoQuality: String!
        audioQuality: String!
        releaseYear: Int
        stars: Int
        rating: String
        extraInfo: String
        timeline: [Event]
        logo: String
        thumbnail: String!
        poster: String!
        subMediaClips: [MediaClipGroup]
    }

    type MediaClipSection {
        name: String!
        mediaClips: [MediaClipInfo]
    }

    type User {
        _id: ID!
        name: String
        active: Boolean
        preferences: UserPreference
    }

    type UserPreference {
        preferredAudioLanguage: String
        preferredCaptionLanguage: String
    }

    type Query {
        
        cria: String

        authenticate(login: String!, passwd: String!): User

        loadMainSections(userID: ID!, locale: String!): [MediaClipSection]

        loadMovieSuggestions(userID: ID, locale: String!): [MediaClipSection]

        loadTvShowSuggestions(userID: ID, locale: String!): [MediaClipSection]

        loadAvailableChannels(userID: ID, locale: String!): [MediaClipSection]

        loadFavorites(userID: ID!, locale: String!): [MediaClipSection]

    }

`)

// 



// 

// 

// 

// type Mutation {
//     createUser(name: String!): User
// }

// type TvShow {
//     _id: ID!
//     mediaType: MediaTypes!
//     manifestTrailer: Manifest
//     title: String!
//     year: Int!
//     rating: Float!
//     videoQuality: String!
//     audioQuality: String!
//     synopsis: String!
//     progress: Int
//     seasons: [Season]
// }

// type MediaManifest {
//     trailer: Manifest
//     release: Manifest
// }

// type Movie {
//     _id: ID!
//     mediaType: MediaTypes!
//     manifest: MediaManifest
//     title: String!
//     year: Int!
//     rating: Float!
//     videoQuality: String!
//     audioQuality: String!
//     synopsis: String!
//     progress: Int
// }

// type Channel {
//     _id: ID!
//     mediaType: MediaTypes!
//     manifest: MediaManifest
//     guide: [Program]
// }

// findMovie(_id: ID!, locale: String!): Movie
        
// findTvShow(_id: ID!, locale: String!): TvShow

// findChannel(_id: ID, locale: String!): Channel

