import { createContext, useCallback, useContext, useState } from 'react'
import { Constants } from '../../globals/Configuration'
import { NavigationAgent, EVENT_UP, EVENT_DOWN, EVENT_LEFT, EVENT_RIGHT, EVENT_BACK } from './NavigationAgent'
import { FocusableUtils } from './FocusableUtils';

export const NavigationContext = createContext(new Map())
export const navigationAgent = new NavigationAgent()

export const useNavigationHook = () => {

    const context = useContext(NavigationContext)
    const [ state, setState ] = useState({ 
        time: Date.now(), 
        currentID: null,
        cursor: null,
        blocked: false
    })

    const navigationReady = useCallback(() => {
        const cursorDOM = document.getElementById(Constants.NAVIGATOR_ID)
        cursorDOM.style.position = "fixed"
        setState(state => ({ ...state, time: Date.now(), currentID: "_first_focusable", cursor: cursorDOM }))
    })

    const processClick = useCallback(() => {
        if (state.blocked) return
        document.getElementById(state.currentID).click()
        setState(state => ({ ...state, time: Date.now() }))
    })

    const processBack = useCallback(() => {
        if (state.blocked) return
        let current = navigationAgent.getFocusableByID(state.currentID)
        FocusableUtils.from(current).onBack(EVENT_BACK)
        setState(state => ({ ...state, time: Date.now() }))
    })

    return {
        // Events
        //...
        toUp: useCallback(() => {
            navigationAgent._processEvent(EVENT_UP)
        }),
        toDown: useCallback(() => {
            navigationAgent._processEvent(EVENT_DOWN)
        }),
        toLeft: useCallback(() => {
            navigationAgent._processEvent(EVENT_LEFT)
        }),
        toRight: useCallback(() => {
            navigationAgent._processEvent(EVENT_RIGHT)
        }),
        click: useCallback(() => {
            processClick()
        }),
        back: useCallback(() => {
            processBack()
        }),

        // Methods
        //...

        // Props
        //...
        state,
        context,
        setState,
        navigationReady
    }
}