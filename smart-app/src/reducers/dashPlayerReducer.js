import { DASHPLAYER_LOADING } from '../actions/actionTypes'

const initialState = {
    loading: false
}

export const dashPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DASHPLAYER_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}