import { 
    SELECT_MEDIA_SECTION,
    SET_MEDIACLIP_SECTION_COLLECTIONS,
    APPLICATION_READY, 
    CHOOSE_USER_COMPONENT,
    APPLICATION_ERROR,
    REGISTER_USER
} from './actionTypes'

export const LOGIN_COMPONENT = 0
export const SWITCHER_COMPONENT = 1
export const APPLICATION_COMPONENT = 2

export const setMediaClipSectionCollections = (home, movies, tvShows, channels, favorites) => {
    return {
        type: SET_MEDIACLIP_SECTION_COLLECTIONS,
        home: home,
        movies: movies,
        tvShows: tvShows,
        channels: channels,
        favorites: favorites
    }
}

export const selectMediaSection = (section) => {
    return {
        type: SELECT_MEDIA_SECTION,
        section: section
    }
}

export const applicationReady = (ready) => {
    return {
        type: APPLICATION_READY,
        ready: ready
    }
}

export const applicationError = (error) => {
    return {
        type: APPLICATION_ERROR,
        error: error
    }
}

export const activeMainApplication = () => {
    return {
        type: CHOOSE_USER_COMPONENT,
        userComponent: APPLICATION_COMPONENT
    }
}

export const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        user: user
    }
}