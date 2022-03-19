import { ReactUtils } from "../utils/ReactUtils"
import { Geometry } from "../utils/Geometry"
import { Utils } from "../utils/Utils";
import { FocusableUtils } from "./FocusableUtils";

//TODO Colocar aqui todas as confs de navegação (id do cursor, etc)
export const EVENT_UP = "EVENT_UP"
export const EVENT_DOWN = "EVENT_DOWN"
export const EVENT_LEFT = "EVENT_LEFT"
export const EVENT_RIGHT = "EVENT_RIGHT"
export const EVENT_CLICK = "EVENT_CLICK"
export const EVENT_BACK = "EVENT_BACK"
const EVENT_JUMPING = "EVENT_JUMPING"
const OFFSET_CORRECTION = 1

export class NavigationAgent {
    
    constructor() {
        this.context
        this.state
        this.setState
    }

    _update(context, state, setState) {
        this.context = context
        this.state = state
        this.setState = setState
    }

    /**
     *
     *
     * @param {*} event
     * @param {*} currentPathKey
     * @param {*} routes
     * @returns Array of DOM focusables
     * @memberof NavigationAgent
     */
    _filterAllowedFocusables(event, currentPathKey, routes) {

        let alloweds = []
        let paths = routes[event]
        if (!paths) {
            paths = []
        }

        this.context.forEach((component, id) => {
            
            const selectable = ReactUtils.getPropertyFromReactComponent(component, "selectable")
            if (!selectable) {
                return
            }
            const pathKey = ReactUtils.getPropertyFromReactComponent(component, "pathKey")
            if (currentPathKey === undefined || paths.indexOf(pathKey) > -1) {
                let dom = document.getElementById(id)
                alloweds.push(dom)
            }
        })
        return alloweds
    }

    /**
     *
     *
     * @param {*} event
     * @param {*} current
     * @param {*} alloweds
     * @returns Nearest DOM component (Focusable)
     * @memberof NavigationAgent
     */
    _findNearest(event, currentID, alloweds) {
        let compomentDOM
        const current = document.getElementById(currentID)

        switch (event) {
            case EVENT_UP:
                compomentDOM = this._filterFocusable(current, alloweds, (currentRect, allowedRect) => allowedRect.y < currentRect.y - OFFSET_CORRECTION)
                break

            case EVENT_DOWN:
                compomentDOM = this._filterFocusable(current, alloweds, (currentRect, allowedRect) => allowedRect.y > currentRect.y + OFFSET_CORRECTION)
                break

            case EVENT_LEFT:
                compomentDOM = this._filterFocusable(current, alloweds, (currentRect, allowedRect) => allowedRect.x < currentRect.x - OFFSET_CORRECTION)
                break

            case EVENT_RIGHT:
                compomentDOM = this._filterFocusable(current, alloweds, (currentRect, allowedRect) => allowedRect.x > currentRect.x + OFFSET_CORRECTION)
                break
        }

        return compomentDOM
    }

    _filterFocusable(current, alloweds, directionalCondition) {
        
        let selected
        const currentRect = current.getBoundingClientRect()

        alloweds.forEach((dom) => {
            const allowedRect = dom.getBoundingClientRect()

            if (!directionalCondition(Geometry.getCenterPoint(currentRect), Geometry.getCenterPoint(allowedRect))) {
                return
            }

            if (!selected) {
                selected = dom
                return
            }

            if (Geometry.isNearest(selected.getBoundingClientRect(), allowedRect, currentRect)) {
                selected = dom
            }
        })
        return selected
    }

    _getCurrentCmpt() {
        let current = this.context.get(this.state.currentID)
        if (!current) return Array.from(this.context)[0][1] // Return the default component
        return current
    }

    /**
     *
     *
     * @param {*} event
     * @memberof NavigationAgent
     */
    _processEvent(event) {

        // console.log(this.context)

        if (this.state.blocked) {
            return
        }

        const currentCmpt = this._getCurrentCmpt()
        // console.log(currentCmpt)
        const pathKey = ReactUtils.getPropertyFromReactComponent(currentCmpt, "pathKey")
        const routes = ReactUtils.getPropertyFromReactComponent(currentCmpt, "routes")
        const alloweds = this._filterAllowedFocusables(event, pathKey, routes)
        // console.log(alloweds)
        const nearestDOM = this._findNearest(event, this.state.currentID, alloweds)

        this._processKeyEvent(currentCmpt)

        if (!nearestDOM) {
            return
        }

        this._selectFocusable(nearestDOM.id, event)
    }

    _processKeyEvent(currentCmpt) {
        ReactUtils.getPropertyFromReactComponent(currentCmpt, "onKeyEvent")()
    }

    _selectFocusable(ID, event) {

        this.state.blocked = true
        const currentCmpt = this._getCurrentCmpt()
        const nearestCmpt = this.context.get(ID)
        const leaveFrom = ReactUtils.getPropertyFromReactComponent(currentCmpt, "onLeave")
        const selectTo = ReactUtils.getPropertyFromReactComponent(nearestCmpt, "onSelect")
        // console.log(ID, currentCmpt)

        leaveFrom(event, currentCmpt, nearestCmpt)
            .then(() => selectTo(event, currentCmpt, nearestCmpt))
            .then(() => this.setState(state => ({ ...state, time: Date.now(), currentID: ID, blocked: false })))
    }

    /**
     *
     *
     * @param {*} ID
     * @param {*} [event=EVENT_JUMPING]
     * @memberof NavigationAgent
     */
    selectFocusable(ID, event = EVENT_JUMPING) {
        this._selectFocusable(ID, event)
    }

    /**
     *
     *
     * @param {*} id
     * @returns
     * @memberof NavigationAgent
     */
    getFocusableByID(id) {
        return this.context.get(id)    
    }

    /**
     *
     *
     * @param {*} property
     * @param {*} value
     * @returns Array of Focusable
     * @memberof NavigationAgent
     */
    findFocusable(property, value) {
        let found = []
        this.context.forEach((component, id) => {
            let propertyCp = ReactUtils.getPropertyFromReactComponent(component, property)
            if (propertyCp === value) {
                found.push(component)
            }
        })
        return found
    }

    /**
     *
     * @deprecated
     * @returns
     * @memberof NavigationAgent
     */
    getCurrentFocusableID() {
        return this.state.currentID
    }

    /**
     *
     *
     * @returns
     * @memberof NavigationAgent
     */
    getCursor() {
        return {
            opacity: (value) => {
                this.state.cursor.style.opacity = value
            },

            copyStyleFrom: (referente) => {
                Utils.copyStyle(referente, this.state.cursor)
            },

            addClass: (className) => {
                this.state.cursor.classList.add(className)
            },

            removeClass: (className) => {
                this.state.cursor.classList.remove(className)
            },

            getRect: () => {
                return this.state.cursor.getBoundingClientRect()
            }
        }
    }

}