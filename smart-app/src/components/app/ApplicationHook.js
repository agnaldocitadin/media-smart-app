import { useCallback } from 'react'
import { useMappedState} from 'redux-react-hook'

export const useApplicationHook = () => {

    const { 
        renderCarousel,
        hiddenCarousel,
        renderQuickSearch,
        renderSettings
        
    } = useMappedState(useCallback(state => ({
        renderCarousel: state.carouselReducer.rendered,
        hiddenCarousel: state.carouselReducer.hidden,
        renderQuickSearch: state.quickSearchReducer.rendered,
        renderSettings: state.settingsReducer.rendered,
        
    }), []))

    return {
        renderCarousel,
        hiddenCarousel,
        renderQuickSearch,
        renderSettings
    }
}