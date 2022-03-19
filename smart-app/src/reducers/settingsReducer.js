import { RENDERED_SETTINGS, HIDDEN_SETTINGS } from '../actions/actionTypes'

const initialState = {
    rendered: false
}

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RENDERED_SETTINGS:
            return {
                ...state,
                rendered: action.rendered
            }
        case HIDDEN_SETTINGS:
            return {
                ...state,
                hidden: action.hidden
            }
        default:
            return state
    }
}