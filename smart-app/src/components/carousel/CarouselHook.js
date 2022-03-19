import { useCallback, useState, useEffect } from 'react'
import { useMappedState, useDispatch } from "redux-react-hook"
import { selectMedia, setActiveMediaDetail, stateMediaDetail } from '../../actions/mediaDetailAction'
import { navigationAgent } from '../navigation/NavigationHook'
import { Utils } from '../utils/Utils';
import { MediaDetailStates } from '../../actions/mediaDetailAction'
import { changeCarouselState } from '../../actions/carouselAction'
import { CarouselStates } from '../../reducers/carouselReducer'

const action = Utils.delayedAction()

export const useCarouselHook = () => {

    const { 
        sections,
        mediaDetailIsActive,
        carouselState,
        menuActive
        
    } = useMappedState(useCallback(state => ({
        sections: state.applicationReducer.selectedMediaSection,
        mediaDetailIsActive: state.mediaDetailReducer.active,
        carouselState: state.carouselReducer.carouselState,
        menuActive: state.carouselReducer.menuActive
    }), []))

    const dispatch = useDispatch()
    const [ section, setSection ] = useState(sections[0])
    const [ current, setCurrent ] = useState()
    const handleChangeMediaClip = useCallback((media) => action.run(() => dispatch(selectMedia(media)), 650))
    const handleSectionClick = useCallback((e, section) => setSection(section))
    
    const handleMediaClick = useCallback((event, value) => {
        const cursor = navigationAgent.getCursor()
        setCurrent(navigationAgent.getCurrentFocusableID())
        Utils.sequencer().play([
            () => cursor.opacity(0),
            () => dispatch(changeCarouselState(CarouselStates.HIDDEN)),
            () => dispatch(stateMediaDetail(MediaDetailStates.ALL_INFOS)),
            () => dispatch(setActiveMediaDetail(true)),
            350,
            () => dispatch(changeCarouselState(CarouselStates.NOT_RENDERED))
        ])
    })

    const onChangeSections = () => {
        const selectedSection = sections[0]
        Utils.sequencer().play([
            () => setSection(selectedSection),
            200,
            () => {
                const firstMediaClip = selectedSection.mediaClips[0]
                navigationAgent.selectFocusable("_media_clips_0")
                dispatch(selectMedia(firstMediaClip))    
            }
        ])
    }

    const onMediaClipInfoIsActive = () => {
        if (carouselState !== CarouselStates.FROZEN && !mediaDetailIsActive && current) {
            Utils.sequencer().play([
                () => dispatch(stateMediaDetail(MediaDetailStates.FEW_INFOS)),
                200,
                () => dispatch(changeCarouselState(CarouselStates.HIDDEN)),
                () => dispatch(changeCarouselState(CarouselStates.RENDERED)),
                () => navigationAgent.selectFocusable(current)
            ])
        }
    }

    useEffect(onChangeSections, [sections])
    useEffect(onMediaClipInfoIsActive, [mediaDetailIsActive])

    return {
        section,
        sections,
        carouselState,
        menuActive,
        handleChangeMediaClip,
        handleSectionClick,
        handleMediaClick
    }

}