import { useCallback } from 'react'
import { Utils } from '../utils/Utils'
import cs from '../app/Cursor.css'
import { useEmptyHook } from './EmptyHook'
import { navigationAgent } from './NavigationHook'

export const useFocusableAnimHook = () => {

    const cursor = navigationAgent.getCursor()
    const empty = useEmptyHook()

    return {
        ...empty,
        
        onSelect: useCallback((event, current, nearest, currentProps, refPathKey) => {
            if (refPathKey !== currentProps.pathKey) {
                return Utils.sequencer().play([
                    () => cursor.copyStyleFrom(nearest),
                    () => cursor.addClass(cs.appNavigator),
                    () => cursor.opacity(1)
                ])
            }
            return Utils.sequencer().play([() => cursor.copyStyleFrom(nearest), 160])
        }),

        onLeave: useCallback((event, current, nearest, nearestProps, refPathKey) => {
            if (refPathKey !== nearestProps.pathKey) {
                return Utils.sequencer().play([
                    () => cursor.opacity(0),
                    () => cursor.removeClass(cs.appNavigator)
                ])
            }
            return Promise.resolve()
        })
    }

}
