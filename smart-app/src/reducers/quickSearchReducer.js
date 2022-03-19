import { RENDERED_QUICKSEARCH, HIDDEN_QUICKSEARCH } from '../actions/actionTypes'

const initialState = {
    rendered: false,
    hidden: false
}

export const quickSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case RENDERED_QUICKSEARCH:
            return {
                ...state,
                rendered: action.rendered
            }
        case HIDDEN_QUICKSEARCH:
            return {
                ...state,
                hidden: action.hidden
            }
        default:
            return state
    }
}