import { 
    SELECT_MEDIA_SECTION,
    SET_MEDIACLIP_SECTION_COLLECTIONS,
    APPLICATION_READY, 
    CHOOSE_USER_COMPONENT,
    APPLICATION_ERROR,
    REGISTER_USER
} from '../actions/actionTypes'

const initialState = {
    selectedMediaSection: null, // [MediaClip] Recebe a collection conforme o menu é acionado
    homeMediaClipSections: null, // [MediaClip] Clips do menu Home
    movieClipSections: null, // [MediaClip] Clips do menu Movies
    tvShowClipSections: null, // [MediaClip] Clips do menu TV
    liveChannelClipSections: null, // [MediaClip] Clips do menu Live
    favoriteClipSections: null, // [MediaClip] Clips do menu Favorites
    ready: false,
    error: null,
    userComponent: -1,
    authenticatedUser: null
}

export const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEDIACLIP_SECTION_COLLECTIONS:
            return {
                ...state,
                homeMediaClipSections: action.home,
                movieClipSections: action.movies,
                tvShowClipSections: action.tvShows,
                liveChannelClipSections: action.channels,
                favoriteClipSections: action.favorites
            }
        case SELECT_MEDIA_SECTION:
            return {
                ...state,
                selectedMediaSection: action.section
            }
        case APPLICATION_READY:
            return {
                ...state,
                ready: action.ready
            }
        case APPLICATION_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CHOOSE_USER_COMPONENT:
            return {
                ...state,
                userComponent: action.userComponent
            }
        case REGISTER_USER:
            return {
                ...state,
                authenticatedUser: action.user
            }
        default:
            return state
    }
}