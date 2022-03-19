import React, { useCallback } from 'react';
import { useDispatch } from 'redux-react-hook';
import { activeCarouselMenu } from '../../actions/carouselAction';
import { CarouselStates } from '../../reducers/carouselReducer';
import AppCSS from '../app/App.css';
import { App } from '../app/ApplicationLoader';
import CursorCSS from '../app/Cursor.css';
import Banner from '../banner/MediaBanner';
import { defaultLeaveBehavior } from '../navigation/FocusableNavBehavior';
import { FocusableUtils } from '../navigation/FocusableUtils';
import { navigationAgent } from '../navigation/NavigationHook';
import Options from '../options/Options';
import Scrollable from '../scrollable/Scrollable';
import { Utils } from '../utils/Utils';
import CSS from './Carousel.css';
import { useCarouselHook } from './CarouselHook';

const mediasRoutes = {
    EVENT_LEFT: ["carousel_medias"],
    EVENT_RIGHT: ["carousel_medias"],
    EVENT_UP: ["menu"],
    EVENT_DOWN: ["carousel_sections"]
}

const sectionsRoutes = {
    EVENT_LEFT: ["carousel_sections"],
    EVENT_RIGHT: ["carousel_sections"],
    EVENT_UP: ["carousel_medias"]
}

const Carousel = () => {
    
    const { 
        sections, 
        section, 
        carouselState, 
        menuActive, 
        handleMediaClick, 
        handleSectionClick, 
        handleChangeMediaClip 
    } = useCarouselHook()
    
    const dispatch = useDispatch()
    const defaultTranslate = menuActive ? "20vh" : "0"
    const transformStyle = { transform: `translateY(${defaultTranslate})` }

    const carouselStyle = {
        display: carouselState === CarouselStates.NOT_RENDERED ? "none" : "inherit",
        opacity: carouselState === CarouselStates.RENDERED ? 1 : 0 
    }

    const mediaClipsStyle = {
        opacity: menuActive ? .4 : 1, 
        filter: menuActive ? "grayscale()" : "none" 
    }

    const onLeaveFromMediaClips = useCallback((event, currentCmpt, nearestCmpt) => {
        
        let cursor = navigationAgent.getCursor()
        const nearestPath = FocusableUtils.from(nearestCmpt).getPathKey()
        
        if (nearestPath === "menu") {
            return Utils.sequencer().play([
                () => cursor.opacity(0),
                () => cursor.removeClass(CursorCSS.appNavigator),
                () => dispatch(activeCarouselMenu(true)),
                400
            ])
        }

        leaveToCarousel(nearestCmpt)
        return defaultLeaveBehavior(event, currentCmpt, nearestCmpt)
    })

    const onLeaveFromSections = useCallback((event, currentCmpt, nearestCmpt) => {
        leaveToCarousel(nearestCmpt)
        return defaultLeaveBehavior(event, currentCmpt, nearestCmpt)
    })

    const leaveToCarousel = (nearestCmpt) => {
        const nearestPath = FocusableUtils.from(nearestCmpt).getPathKey()
        if (nearestPath === "carousel_medias") {
            let selectedMedia = FocusableUtils.from(nearestCmpt).getValue()
            handleChangeMediaClip(selectedMedia)
        }
    }

    return (
        <div className={CSS.carousel} style={carouselStyle}>
            <Options translateY={defaultTranslate}/>
            <div className={CSS.grayTransition} style={mediaClipsStyle}>
                <h2 style={transformStyle}>{ section.name }</h2>
                <Scrollable
                    id="_media_clips"
                    pathKey="carousel_medias"
                    routes={mediasRoutes}
                    data={section.mediaClips}
                    template={mediaTemplate}
                    childWidth="29vh"
                    childHeight="16.3vh"
                    // boxWidth="31vh"
                    initOffset="40vw"
                    endOffset="110vw"
                    // focusableClassName={`${AppCSS.rounded} ${CSS.medias}`}
                    itemMargin="0 2vh 2vh 0"
                    onClick={handleMediaClick}
                    onBack={() => {
                        if (confirm("Deseja sair do app?")) {
                            App.close()
                        }
                    }}
                    onLeave={onLeaveFromMediaClips}
                    externalTranslateY={defaultTranslate}/>

                <Scrollable
                    id="_media_sections"
                    pathKey="carousel_sections"
                    routes={sectionsRoutes}
                    data={sections}
                    template={sectionTemplate}
                    childWidth="29vh"
                    childHeight="9.5vh"
                    // boxWidth="31vh"
                    initOffset="40vw"
                    endOffset="110vw"
                    // focusableClassName={`${AppCSS.rounded} ${CSS.section}`}
                    itemMargin="0 2vh 2vh 0"
                    onClick={handleSectionClick}
                    onLeave={onLeaveFromSections}
                    externalTranslateY={defaultTranslate}/>
            </div>
        </div>
    )
}

const mediaTemplate = (mediaClip, rendered) => {
    return Utils.branch(<Banner bannerClass={AppCSS.rounded} imagePath={mediaClip.thumbnail} name={mediaClip.title}/>, rendered)
}

const sectionTemplate = (mediaClipInfo, rendered) => {
    return Utils.branch(<span className={`${CSS.section} ${AppCSS.rounded}`}><b>{ mediaClipInfo.name }</b></span>, rendered) 
}

export default Carousel