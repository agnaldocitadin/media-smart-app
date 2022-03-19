import { STATE_MEDIA_DETAIL, PLAYING_MEDIA, SELECT_MEDIA, ACTIVE_MEDIA_DETAIL } from '../actions/actionTypes'
import { MediaDetailStates } from '../actions/mediaDetailAction'

const initialState = {
    media: null,
    playingMedia: false,
    mediaClipInfoState: MediaDetailStates.FEW_INFOS,
    active: false
}

export const mediaDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYING_MEDIA:
            return {
                ...state,
                playingMedia: action.playingMedia
            }
        case STATE_MEDIA_DETAIL:
            return {
                ...state,
                mediaClipInfoState: action.mediaClipInfoState
            }
        case SELECT_MEDIA:
            return {
                ...state,
                media: action.media
            }
        case ACTIVE_MEDIA_DETAIL:
            return {
                ...state,
                active: action.active
            }
        default:
            return state
    }
}