import { useCallback, useEffect } from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { renderSettings, hiddenSettings } from '../../actions/settingsAction'
// import { renderCarousel, hiddenCarousel } from '../../actions/carouselAction'
import { stateMediaDetail, MediaDetailStates } from '../../actions/mediaDetailAction'
import { Utils } from '../utils/Utils';
import { navigationAgent } from '../navigation/NavigationHook';

export const useSettingsHook = () => {

    const dispatch = useDispatch()
    const { hidden } = useMappedState(useCallback(state => ({ hidden: state.settingsReducer.hidden }), []))

    const handleBack = useCallback(() => {
        Utils.sequencer().play([
            () => dispatch(hiddenSettings(true)),
            // () => dispatch(renderCarousel(true)),
            // () => dispatch(hiddenCarousel(false)),
            () => dispatch(stateMediaDetail(MediaDetailStates.FEW_INFOS)),
            () => dispatch(renderSettings(false))
        ])
    }, [])

    useEffect(() => {
        if (hidden) {
            dispatch(hiddenSettings(false))
        }
        const e = navigationAgent.findFocusable("pathKey", "eita")[0]
        navigationAgent.selectFocusable(e)
    }, [])
    
    return {
        hidden,
        handleBack
    }
}