import { FocusableUtils } from "./FocusableUtils"
import { navigationAgent } from "./NavigationHook"
import { Utils } from "../utils/Utils"
import CSS from '../app/Cursor.css'

/**
 *
 *
 * @param {*} event
 * @param {*} currentCmpt
 * @param {*} nearestCmpt
 * @returns
 */
export const defaultSelectBehavior = (event, currentCmpt, nearestCmpt) => {
    
    let cursor = navigationAgent.getCursor()
    let currentPathKey = FocusableUtils.from(currentCmpt).getPathKey()
    let nearestPathKey = FocusableUtils.from(nearestCmpt).getPathKey()
    let nearestID = FocusableUtils.from(nearestCmpt).getID()
    let nearestDOM = document.getElementById(nearestID)

    if (nearestPathKey !== currentPathKey) {
        return Utils.sequencer().play([
            () => cursor.copyStyleFrom(nearestDOM),
            () => cursor.addClass(CSS.appNavigator),
            () => cursor.opacity(1)
        ])
    }

    return Utils.sequencer().play([
        () => cursor.opacity(1),
        () => cursor.copyStyleFrom(nearestDOM), 
        160
    ])
}

/**
 *
 *
 * @param {*} event
 * @param {*} currentCmpt
 * @param {*} nearestCmpt
 * @returns
 */
export const defaultLeaveBehavior = (event, currentCmpt, nearestCmpt) => {

    let cursor = navigationAgent.getCursor()
    let currentPathKey = FocusableUtils.from(currentCmpt).getPathKey()
    let nearestPathKey = FocusableUtils.from(nearestCmpt).getPathKey()
    
    if (currentPathKey !== nearestPathKey) {
        return Utils.sequencer().play([
            () => cursor.opacity(0),
            () => cursor.removeClass(CSS.appNavigator)
        ])
    }

    return Promise.resolve()
}
