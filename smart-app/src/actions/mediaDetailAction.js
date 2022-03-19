import { STATE_MEDIA_DETAIL, PLAYING_MEDIA, SELECT_MEDIA, ACTIVE_MEDIA_DETAIL } from './actionTypes'

export const MediaDetailStates = {
    ALL_INFOS: 0,
    FEW_INFOS: 1,
    NOTHING: 2,
    AUDIO_SELECT: 3,
    SUBTITLE_SELECT: 4,
    SEASONS_BROWSER: 5
}

export const setPlayingMedia = (playingMedia) => {
    return {
        type: PLAYING_MEDIA,
        playingMedia: playingMedia
    }
}

export const selectMedia = (media) => {
    return {
        type: SELECT_MEDIA,
        media: media
    }
}

export const stateMediaDetail = (mediaClipInfoState) => {
    return {
        type: STATE_MEDIA_DETAIL,
        mediaClipInfoState: mediaClipInfoState
    }
}

export const setActiveMediaDetail = (active) => {
    return {
        type: ACTIVE_MEDIA_DETAIL,
        active: active
    }
}