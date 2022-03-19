import { RENDERED_SETTINGS, HIDDEN_SETTINGS } from './actionTypes'

export const renderSettings = (rendered) => {
    return {
        type: RENDERED_SETTINGS,
        rendered: rendered
    }
}

export const hiddenSettings = (hidden) => {
    return {
        type: HIDDEN_SETTINGS,
        hidden: hidden
    }
}