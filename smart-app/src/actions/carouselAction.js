import { CHANGE_CAROUSEL_STATE, ACTIVE_CAROUSEL_MENU } from './actionTypes'

export const changeCarouselState = (state) => {
    return {
        type: CHANGE_CAROUSEL_STATE,
        newState: state
    }
}

export const activeCarouselMenu = (active) => {
    return {
        type: ACTIVE_CAROUSEL_MENU,
        menuActive: active
    }
}