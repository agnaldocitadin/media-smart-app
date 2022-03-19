import { CHANGE_CAROUSEL_STATE, ACTIVE_CAROUSEL_MENU } from '../actions/actionTypes'

export const CarouselStates = Object.freeze({
    RENDERED: "RENDERED",
    HIDDEN: "HIDDEN",
    NOT_RENDERED: "NOT_RENDERED",
    FROZEN: "FROZEN"
})

const initialState = {
    carouselState: CarouselStates.RENDERED,
    menuActive: false
}

export const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CAROUSEL_STATE:
            return {
                ...state,
                carouselState: action.newState
            }
        case ACTIVE_CAROUSEL_MENU:
            return {
                ...state,
                menuActive: action.menuActive
            }
        default:
            return state
    }
}