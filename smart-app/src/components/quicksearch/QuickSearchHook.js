import { useState, useCallback, useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { Utils } from '../utils/Utils'
import * as API from '../../../../libstream/src/API'
import { navigationAgent } from '../navigation/NavigationHook'
import { renderQuickSearch, hiddenQuickSearch } from '../../actions/quickSearchAction'
import { stateMediaDetail, MediaDetailStates, setActiveMediaDetail } from '../../actions/mediaDetailAction'
// import { renderCarousel, hiddenCarousel } from '../../actions/carouselAction'

const delay = Utils.delayedAction()

const search = (chars, setSearchResult) => {
    // API.searchBy(chars).then(data => {
    //     setSearchResult(data)
    // })
}

export const useQuickSearchHook = () => {
    
    const dispatch = useDispatch()
    const [ typing, setTyping ] = useState("")
    const [ searchResult, setSearchResult ] = useState({})
    const [ current, setCurrent ] = useState()
    const { hidden, mediaDetailIsActive } = useMappedState(useCallback(state => ({ 
        hidden: state.quickSearchReducer.hidden,
        mediaDetailIsActive: state.mediaDetailReducer.active
    }), []))

    useEffect(() => {
        if (!mediaDetailIsActive && current) {
            dispatch(stateMediaDetail(MediaDetailStates.NOTHING))
            dispatch(hiddenQuickSearch(false))
            navigationAgent.selectFocusable(current)
        }
    }, [mediaDetailIsActive])

    useEffect(() => {
        setTyping("")
        setSearchResult({})
        const firstKey = navigationAgent.findFocusable("pathKey", "keyboard")[0]
        navigationAgent.selectFocusable(firstKey)
        if (hidden) {
            dispatch(hiddenQuickSearch(false))
        }
    }, [])

    return {
        handleTyping: useCallback((chars) => {
            setTyping(chars)
            if (!chars) {
                setSearchResult(null)
                delay.clear()
                return
            }
            delay.run(() => search(chars, setSearchResult), 1200)
        }, []),

        handleSuggestionClick: useCallback((chars) => {
            setTyping(chars)
            search(chars, setSearchResult)
        }),

        handleBannerClick: useCallback((media) => {
            setCurrent(navigationAgent.getCurrentFocusableID())
            dispatch(hiddenQuickSearch(true))
            dispatch(stateMediaDetail(MediaDetailStates.ALL_INFOS))
            dispatch(setActiveMediaDetail(true))
        }, []),

        hanldeLazyLoad: useCallback(() => {
            // return API.searchBy("").then(data => data.medias)
            return Promise.resolve()
        }, []),

        handleBack: useCallback(() => {
            Utils.sequencer().play([
                () => navigationAgent.getCursor().opacity(0),
                () => dispatch(hiddenQuickSearch(true)),
                // () => dispatch(renderCarousel(true)),
                // () => dispatch(hiddenCarousel(false)),
                () => dispatch(stateMediaDetail(MediaDetailStates.FEW_INFOS)),
                () => dispatch(renderQuickSearch(false))
            ])
        }),

        searchResult,
        typing,
        hidden
    }
}
