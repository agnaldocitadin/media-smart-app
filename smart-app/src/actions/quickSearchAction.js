import { RENDERED_QUICKSEARCH, HIDDEN_QUICKSEARCH } from './actionTypes'

export const renderQuickSearch = (rendered) => {
    return {
        type: RENDERED_QUICKSEARCH,
        rendered: rendered
    }
}

export const hiddenQuickSearch = (hidden) => {
    return {
        type: HIDDEN_QUICKSEARCH,
        hidden: hidden
    }
}