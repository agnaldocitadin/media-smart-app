import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Aspect } from '../utils/Aspect'
import Focusable from '../navigation/Focusable'
import { defaultSelectBehavior, defaultLeaveBehavior } from '../navigation/FocusableNavBehavior'
import { FocusableUtils } from '../navigation/FocusableUtils'
import CSS from './Scrollable.css'
import { Geometry } from '../utils/Geometry';
import { Utils } from '../utils/Utils';
import { navigationAgent } from '../navigation/NavigationHook';

// FIXME MElhorar as properties de estilização do componente. Tá meio zuado!!
const Scrollable = ({
    id,
    data, 
    pathKey,
    routes,
    vertical,
    lazyLoad,
    initOffset,
    endOffset, 
    externalTranslateX,
    externalTranslateY,
    template,
    isClickable,
    childWidth, 
    childHeight,
    // boxWidth,
    // boxHeight,
    className,
    // focusableClassName,
    onClick,
    onBack,
    onLeave,
    onselect,
    itemPadding,
    itemMargin,
    itemBackground
}) => {

    const width = Aspect.toPixel(childWidth)
    const height = Aspect.toPixel(childHeight)
    const [ collection, setCollection ] = useState([])
    const [ translate, setTranslate ] = useState(0)
    const reset = useCallback(() => setTranslate(0), [])

    const isRendered = useCallback((index) => {
        if (vertical) {
            let posY = index * height
            let isUnderInitOffset = (-translate - posY) < Aspect.toPixel(initOffset)
            let isUnderEndOffset = (posY + translate) < Aspect.toPixel(endOffset)
            return isUnderInitOffset && isUnderEndOffset
        }
        else {
            let posX = index * width
            let isUnderInitOffset = (-translate - posX) < Aspect.toPixel(initOffset)
            let isUnderEndOffset = (posX + translate) < Aspect.toPixel(endOffset)
            return isUnderInitOffset && isUnderEndOffset
        }
    })

    const updateTranslate = useCallback((newTranslate) => {
        setTranslate(current => {
            let updated = current - newTranslate
            if (updated > 0) return 0
            return updated
        })
    })

    const calculateTranslate = (nearestDOM, vertical) => {
        let nearestRect = nearestDOM.getBoundingClientRect()
        let navRect = navigationAgent.getCursor().getRect()
        if (vertical) return (nearestRect.top - navRect.top)
        return (nearestRect.left - navRect.left)
    }

    const _onSelect = useCallback((event, currentCmpt, nearestCmpt) => {
        const nearestId = FocusableUtils.from(nearestCmpt).getID()
        const nearestDOM = document.getElementById(nearestId)
        if (Geometry.isOutOfBox(nearestDOM, document.body)) {
            return Utils.sequencer().play([() => updateTranslate(calculateTranslate(nearestDOM, vertical)), 400 ])
        }
        return defaultSelectBehavior(event, currentCmpt, nearestCmpt)
    })

    const onChangeTranslate = () => {
        if (translate < 0) {
            console.log("Agora sim chama o lazy!!")
            lazyLoad() //TODO
        }
    }
    
    const onChangeData = () => {
        setCollection(data)
        reset()
    }
    
    useEffect(onChangeTranslate, [translate])
    useEffect(onChangeData, [data])

    return (
        <div className={`${CSS.scrollable} ${className} ${ vertical ? CSS.scrollableVertical : CSS.scrollableHorizontal}`}>
            { collection.map((item, key) => {
                let rendered = isRendered(key)
                let style = { 
                    height: childHeight, 
                    willChange: "transform", 
                    transition: "transform 400ms cubic-bezier(0.39, 0.575, 0.565, 1)"
                }
                if (!vertical) {
                    style = {...style, ...{ flex: `0 0 ${childWidth}`, transform: `translate(${translate}px, ${externalTranslateY})` }}
                }
                else {
                    style = {...style, ...{ width: childWidth, transform: `translate(${externalTranslateX}, ${translate}px)` }}
                }
                return (
                    <Focusable
                        id={`${id}_${key}`}
                        value={item}
                        key={key}
                        pathKey={pathKey}
                        routes={routes}
                        onClick={onClick}
                        onBack={onBack}
                        onLeave={(onLeave || defaultLeaveBehavior)}
                        onSelect={(onselect || _onSelect)}
                        selectable={rendered}
                        clickable={isClickable(item)}
                        style={style}
                        background={itemBackground}
                        margin={itemMargin}
                        padding={itemPadding}
                        >
                        { template(item, rendered) }
                    </Focusable>
                )
            }) }
        </div>
    )
}

Scrollable.defaultProps = {
    data: [],
    vertical: false,
    className: "",
    onClick: () => {},
    lazyLoad: () => {},
    externalTranslateX: "0",
    externalTranslateY: "0",
    isClickable: () => true
}

Scrollable.propTypes = {

    // Properties
    id: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired,
    vertical: PropTypes.bool,
    pathKey: PropTypes.string,
    routes: PropTypes.object,
    lazyLoad: PropTypes.func,
    initOffset: PropTypes.string.isRequired,
    endOffset: PropTypes.string.isRequired,
    template: PropTypes.func.isRequired,
    isClickable: PropTypes.func,
    childWidth: PropTypes.string.isRequired,
    childHeight: PropTypes.string.isRequired,
    // boxWidth: PropTypes.string,
    // boxHeight: PropTypes.string,
    externalTranslateX: PropTypes.string,
    externalTranslateY: PropTypes.string,
    className: PropTypes.string,
    itemPadding: PropTypes.string,
    itemMargin: PropTypes.string,
    itemBackground: PropTypes.string,

    
    // Events
    onClick: PropTypes.func,
    onBack: PropTypes.func,
    onLeave: PropTypes.func,
    onSelect: PropTypes.func
}

export default Scrollable