import { DASHPLAYER_LOADING } from './actionTypes'

export const setDashPlayerLoading = (loading) => {
    return {
        type: DASHPLAYER_LOADING,
        loading: loading
    }
}