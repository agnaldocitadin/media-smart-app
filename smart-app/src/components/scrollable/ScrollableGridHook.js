import { useCallback, useState } from 'react'
import { Utils } from '../utils/Utils'
import { Geometry } from '../utils/Geometry'
import { useFocusableAnimHook } from '../navigation/FocusableAnimHook'
import { navigationAgent } from '../navigation/NavigationHook'

export const useScrollableGridHook = () => {
    
    const hook = useFocusableAnimHook()
    const [ translate, setTranslate ] = useState(0)

    const updateTranslate = useCallback((newTranslate) => {
        setTranslate(current => {
            let updated = current + newTranslate
            if (updated < 0) updated = 0
            return updated
        })
    })

    return {
        ...hook,
        translate,
        onSelect: useCallback((event, current, nearest, currentProps, refPathKey) => {
            if (Geometry.isOutOfBox(nearest, document.body)) {
                return Utils.sequencer().play([ () => updateTranslate(calculateTranslate(nearest)), 400 ])
            }
            return hook.onSelect(event, current, nearest, currentProps, refPathKey)
        })
    }
}

const calculateTranslate = (nearest) => {
    let nearestRect = nearest.getBoundingClientRect()
    let navRect = navigationAgent.getCursor().getRect()
    return (nearestRect.top - navRect.top)
}