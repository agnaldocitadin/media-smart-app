import { useCallback } from 'react'
import { useScrollableGridHook } from "../scrollable/ScrollableGridHook"
import { useDispatch } from 'redux-react-hook'
import { navigationAgent } from '../navigation/NavigationHook';
import { ReactUtils } from '../utils/ReactUtils'
import { selectMedia  } from '../../actions/mediaDetailAction'

export const useScrollableQuickSearchHook = () => {

    const dispatch = useDispatch()
    const hook = useScrollableGridHook()

    return {
        ...hook,
        onSelect: useCallback((event, current, nearest, currentProps, refPathKey) => {
            const cp = ReactUtils.findComponentFromDOM(nearest)
            const value = ReactUtils.getPropertyFromReactComponent(cp, "value")
            dispatch(selectMedia(value))
            return hook.onSelect(event, current, nearest, currentProps, refPathKey)
        })
    }
}