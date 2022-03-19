import { useCallback, useEffect, useRef, useState } from 'react'
import { navigationAgent } from '../navigation/NavigationHook'
import { Utils } from '../utils/Utils'
import { Buttons } from './BasicPlayer'
import { defaultSelectBehavior } from '../navigation/FocusableNavBehavior'
import { FocusableUtils } from '../navigation/FocusableUtils'
import CursorCSS from '../app/Cursor.css'

const action = Utils.delayedAction()

export const useBasicPlayerHook = ({ id, activePlaybackButton, autoHideControls, initWithHiddenControls, renderControls, onPlay, onPause, onBackKey }) => {

    const [ hiddenControls, setHiddenControls ] = useState(initWithHiddenControls)
    const [ renderLanguageSelector, setRenderLanguageSelector ] = useState(false)
    const cursor = navigationAgent.getCursor()

    const canHideControls = useCallback(() => {
        return renderControls && autoHideControls && activePlaybackButton === Buttons.PAUSE
    }, [activePlaybackButton, autoHideControls])

    const scheduleHideControls = useCallback((force) => {
        if (canHideControls() || force) {
            action.run(() => {
                cursor.opacity(0),
                setHiddenControls(true)
            }, 5000)
            return
        }
        action.clear()
    })

    const onSelectPlayerButtons = useCallback((event, currentCmpt, nearestCmpt) => {
        const path = FocusableUtils.from(currentCmpt).getPathKey()
        if (path !== "button_media_detail") {
            cursor.opacity(1)
            setHiddenControls(false)
            scheduleHideControls()
            return defaultSelectBehavior(event, currentCmpt, nearestCmpt)
        }

        const id = FocusableUtils.from(nearestCmpt).getID()
        const nearestDOM = document.getElementById(id)
        return Utils.sequencer().play([
            () => cursor.copyStyleFrom(nearestDOM),
            () => cursor.addClass(CursorCSS.appNavigator)
        ])
    })

    const openLanguageSelector = useCallback(() => {
        if (hiddenControls) {
            cursor.opacity(1)
            setHiddenControls(false)
            scheduleHideControls()
            return
        }

        Utils.sequencer().play([
            () => setHiddenControls(true),
            () => setRenderLanguageSelector(true),
            () => {
                onPause()
                navigationAgent.selectFocusable(`${id}_list_audios_0`)
            }
        ])
        action.clear()
    })

    const closeLanguageSelector = useCallback(() => {
        Utils.sequencer().play([
            () => {
                navigationAgent.selectFocusable(`${id}_bt_player_language`)
                onPlay()
            },
            () => setRenderLanguageSelector(false),
            () => scheduleHideControls(true)
        ])
        
    })

    const onKeyEvent = useCallback(() => {
        scheduleHideControls()
        if (hiddenControls) {
            setHiddenControls(false)
            cursor.opacity(1)
        }
    })

    const playPauseAction = useCallback(() => {
        if (hiddenControls) {
            setHiddenControls(false)
            scheduleHideControls()
            cursor.opacity(1)
            return
        }
        activePlaybackButton === Buttons.PLAY ? onPlay() : onPause()
    })

    const onBackFromPlayer = useCallback(() => {
        setHiddenControls(true)
        cursor.opacity(0)
        onBackKey()
    })

    const onChangeActiveButton = () => scheduleHideControls()
    useEffect(onChangeActiveButton, [activePlaybackButton])

    return {
        onSelectPlayerButtons,
        openLanguageSelector,
        closeLanguageSelector,
        onKeyEvent,
        playPauseAction,
        onBackFromPlayer,
        openedCaptionBox: false,
        controlsRef: useRef(),
        hiddenControls,
        renderLanguageSelector
    }
}