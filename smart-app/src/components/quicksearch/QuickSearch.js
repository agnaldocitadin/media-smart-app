import React, { useCallback } from 'react'
import { useQuickSearchHook } from './QuickSearchHook'
import i18n from '../../globals/i18n'
import Content from '../layout/Content'
import LeftContent from '../layout/LeftContent'
import RightContent from '../layout/RightContent'
import VirtualKeyboard from '../virtual-keyboard/VirtualKeyboard'
import Banner from '../banner/MediaBanner'
import Focusable from '../navigation/Focusable'
import ScrollableGrid from '../scrollable/ScrollableGrid'
import styles from './QuickSearch.css'
import app from '../app/App.css'
import { Utils } from '../utils/Utils'
import { useScrollableQuickSearchHook } from './ScrollableQuickSearchHook';

const defaultRoutes = {
    EVENT_UP: ["keyboard"],
    EVENT_DOWN: ["keyboard", "backspace", "space"],
    EVENT_LEFT: ["keyboard", "menu_option_selected"],
    EVENT_RIGHT: ["keyboard", "quick_search_banner"]
}

const spaceRoutes = {
    EVENT_UP: ["keyboard"],
    EVENT_LEFT: ["menu_option_selected"],
    EVENT_RIGHT: ["backspace"],
    EVENT_DOWN: ["suggestion"]
}

const backspaceRoutes = {
    EVENT_UP: ["keyboard"],
    EVENT_DOWN: ["suggestion"],
    EVENT_LEFT: ["space"],
    EVENT_RIGHT: ["quick_search_banner"]
}

const suggestionRoutes = {
    EVENT_UP: ["suggestion", "space"],
    EVENT_DOWN: ["suggestion"],
    EVENT_LEFT: ["menu_option_selected"],
    EVENT_RIGHT: ["quick_search_banner"]    
}

const bannersRoutes = {
    EVENT_UP: ["quick_search_banner"],
    EVENT_DOWN: ["quick_search_banner"],
    EVENT_LEFT: ["quick_search_banner", "keyboard", "suggestion"],
    EVENT_RIGHT: ["quick_search_banner"],
}

const QuickSearch = () => {
    
    const {
        typing,
        handleTyping,
        handleSuggestionClick,
        handleBannerClick,
        hanldeLazyLoad,
        handleBack,
        searchResult,
        hidden
    } = useQuickSearchHook()
    const gridHook = useScrollableQuickSearchHook()

    return (
        <Content style={{ opacity: hidden ? 0 : 1 }}>
            <LeftContent>
                <VirtualKeyboard 
                    notifyMemoryChanges={handleTyping} 
                    overrideMemory={typing}
                    handleBack={handleBack}
                    defaultRoutes={defaultRoutes}
                    spaceRoutes={spaceRoutes}
                    backspaceRoutes={backspaceRoutes}/>

                <Suggestions 
                    suggestions={searchResult.suggestions}
                    handleSuggestionClick={handleSuggestionClick}
                    handleBack={handleBack}/>
            </LeftContent>
            
            <RightContent>
                <h1 className={`${styles.searchBy} ${typing ? styles.typed : ""}`}>{ !typing ? i18n.t("looking-for") : typing }</h1>
                <ScrollableGrid 
                    pathKey="quick_search_banner"
                    routes={bannersRoutes}
                    data={searchResult.medias} 
                    template={bannerTemplate} 
                    coluns={3}
                    childWidth="19vw"
                    childHeight="22vh"
                    initOffset="90vh"
                    endOffset="150vh"
                    lazyLoad={hanldeLazyLoad}
                    onClick={handleBannerClick}
                    onBack={handleBack}
                    focusableClassName={`${app.rounded} ${styles.banners}`}
                    behaviorHook={gridHook}/>
            </RightContent>
        </Content>
    )
}

const Suggestions = ({ suggestions, handleSuggestionClick, handleBack }) => {
    if (suggestions) {
        return (
            <ul className={styles.suggestions}>
                { suggestions.map((suggestion, key) => 
                    <li key={key}>
                        <Focusable
                            pathKey="suggestion"
                            routes={suggestionRoutes}
                            onClick={useCallback(() => handleSuggestionClick(suggestion), [suggestion])}
                            onBack={handleBack}
                            className={styles.suggestion}>
                            { suggestion }
                        </Focusable>
                    </li>
                ) }
            </ul>
        )
    }
    return null
}

const bannerTemplate = (media, rendered) => {
    return Utils.branch(<Banner media={media} name={media.name} />, rendered)
}

export default QuickSearch