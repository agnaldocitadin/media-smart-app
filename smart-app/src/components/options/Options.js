import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Utils } from '../utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faHeart, faHome, faSatelliteDish, faSearch, faTv, faVideo } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { selectMediaSection } from '../../actions/applicationAction'
import { MediaDetailStates, stateMediaDetail } from '../../actions/mediaDetailAction'
import { renderQuickSearch } from '../../actions/quickSearchAction'
import { renderSettings } from '../../actions/settingsAction'
import i18n from '../../globals/i18n'
import { EVENT_DOWN } from '../navigation/NavigationAgent'
import { navigationAgent } from '../navigation/NavigationHook'
import Scrollable from '../scrollable/Scrollable'
import { defaultLeaveBehavior, defaultSelectBehavior } from '../navigation/FocusableNavBehavior'
import AppCSS from '../app/App.css'
import CSS from './Options.css'
import CursorCSS from '../app/Cursor.css'
import { FocusableUtils } from '../navigation/FocusableUtils';
import { activeCarouselMenu } from '../../actions/carouselAction'


const menuRoutes = {
    EVENT_LEFT: ["menu"],
    EVENT_RIGHT: ["menu"],
    EVENT_DOWN: ["carousel_medias"],
}

const menuOptions = (option, rendered) => {
    return Utils.branch(
        <span className={`${AppCSS.rounded} ${CSS.menuOption}`}>
            <FontAwesomeIcon icon={option.icon} />
            <p>{ option.name }</p>
        </span>
    , rendered)
}

const Options = ({ translateY }) => {

    const cursor = navigationAgent.getCursor()
    const dispatch = useDispatch()
    const { 
        homeClips,
        movieClips,
        tvShowClips,
        channelClips,
        favoriteClips
        
    } = useMappedState(useCallback(state => ({
        homeClips: state.applicationReducer.homeMediaClipSections,
        movieClips: state.applicationReducer.movieClipSections,
        tvShowClips: state.applicationReducer.tvShowClipSections,
        channelClips: state.applicationReducer.liveChannelClipSections,
        favoriteClips: state.applicationReducer.favoriteClipSections
    }), []))

    const fireOptionAction = useCallback((e, option) => option.action(), [])

    const isClickable = useCallback(() => {
        return translateY !== "0"
    }, [translateY])

    const searchClick = useCallback((option) => {
        Utils.sequencer().play([
            // () => dispatch(hiddenCarousel(true)),
            () => cursor.opacity(0),
            () => dispatch(stateMediaDetail(MediaDetailStates.NOTHING)),
            () => dispatch(renderQuickSearch(true)),
            // () => dispatch(renderCarousel(false))
        ])
    }, [])
    
    const homeClick = useCallback(() => dispatch(selectMediaSection(homeClips)), [])
    const moviesClick = useCallback(() => dispatch(selectMediaSection(movieClips)), [])
    const tvShowsClick = useCallback(() => dispatch(selectMediaSection(tvShowClips)), [])
    const channelsClick = useCallback(() => dispatch(selectMediaSection(channelClips)), [])
    const favoritesClick = useCallback(() => dispatch(selectMediaSection(favoriteClips)), [])

    const settingsClick = useCallback((option) => {
        Utils.sequencer().play([
            // () => dispatch(hiddenCarousel(true)),
            () => cursor.opacity(0),
            () => dispatch(stateMediaDetail(MediaDetailStates.NOTHING)),
            () => dispatch(renderSettings(true)),
            // () => dispatch(renderCarousel(false))
        ])
    }, [])

    const options = useCallback(() => {
        return [
            { icon: faSearch, name: i18n.t("search"), action: searchClick },
            { icon: faHome, name: i18n.t("home"), action: homeClick },
            { icon: faVideo, name: i18n.t("movies"), action: moviesClick },
            { icon: faTv, name: i18n.t("tv-shows"), action: tvShowsClick },
            { icon: faSatelliteDish, name: i18n.t("channels"), action: channelsClick },
            { icon: faHeart, name: i18n.t("favorites"), action: favoritesClick },
            { icon: faCogs, name: i18n.t("settings"), action: settingsClick }
        ]
    }, [])

    const backToCarousel = useCallback(() => navigationAgent._processEvent(EVENT_DOWN), [])

    const onLeave = useCallback((event, currentCmpt, nearestCmpt) => {
        let cursor = navigationAgent.getCursor()
        const nearestPath = FocusableUtils.from(nearestCmpt).getPathKey()
        if (nearestPath === "carousel_medias") {
            return Utils.sequencer().play([
                () => cursor.opacity(0),
                () => cursor.removeClass(CursorCSS.appNavigator),
                () => dispatch(activeCarouselMenu(false)),
                400
            ])
        }
        return defaultLeaveBehavior(event, currentCmpt, nearestCmpt)
    })

    return (
        <div className={CSS.opacityTransition} style={{ opacity: translateY !== "0" ? 1 : 0 }}>
            <h2 style={{ transform: `translateY(${translateY})` }}>{ i18n.t("options") }</h2>
            <Scrollable
                id="_menu_options"
                pathKey="menu"
                routes={menuRoutes}
                data={options}
                template={menuOptions}
                isClickable={isClickable}
                childWidth="29vh"
                childHeight="14vh"
                initOffset="40vw"
                endOffset="110vw"
                // focusableClassName={}
                onClick={fireOptionAction}
                onBack={backToCarousel}
                onLeave={onLeave}
                externalTranslateY={translateY}/>
        </div>
    )
}

Options.defaultProps = {
    translateY: 0,
}

Options.propTypes = {
    translateY: PropTypes.string
}

export default Options