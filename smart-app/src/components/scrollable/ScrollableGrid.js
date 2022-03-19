import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Aspect } from '../utils/Aspect'
import { useScrollableGridHook } from './ScrollableGridHook'
import Focusable from '../navigation/Focusable'
import styles from './Scrollable.css'

const ScrollableGrid = ({ 
    data, 
    pathKey,
    routes,
    lazyLoad,
    coluns,
    initOffset,
    endOffset,
    template,
    isClickable,
    childWidth,
    childHeight,
    focusableClassName,
    onClick,
    onBack,
    onTranslate,
    behaviorHook
}) => {

    const altura = Aspect.toPixel(childHeight)
    const [ collection, setCollection ] = useState([])
    const hook = behaviorHook ? behaviorHook : useScrollableGridHook()

    const isRendered = useCallback((index) => {
        let line = parseInt(index / coluns)
        let posY = line * altura
        let isUnderInitOffset = (hook.translate - posY) < Aspect.toPixel(initOffset)
        let isUnderEndOffset = (posY - hook.translate) < Aspect.toPixel(endOffset)
        return isUnderInitOffset && isUnderEndOffset
    })

    const fireLazyLoad = useCallback(() => {
        if (!lazyLoad) {
            return
        }
        if (((collection.length / coluns) * altura) - hook.translate < Aspect.toPixel(endOffset)) {
            lazyLoad().then(data => {
                let lazyLoadedData = collection.concat(data)
                if (lazyLoadedData.length > 0) {
                    console.debug("New calling to loadLazy")
                    setCollection(lazyLoadedData)
                }
            })
        }

    }, [hook.translate, data, collection])

    useEffect(() => {
        if (hook.translate > 0) {
            fireLazyLoad()
            onTranslate(hook.translate)
        }
    }, [hook.translate])

    useEffect(() => {
        setCollection(data)
    }, [data])

    const w = 100 / coluns

    return (
        <div className={styles.scrollableGrid}>
            { collection.map((item, key) => {
                let rendered = isRendered(key)
                return (
                    <Focusable
                        value={item}
                        key={key}
                        pathKey={pathKey}
                        routes={routes}
                        onClick={() => onClick(item)}
                        onBack={onBack}
                        selectable={rendered}
                        isClickable={isClickable(item)}
                        behaviorHook={hook}
                        style={{ height: childHeight, transform: `translateY(${-hook.translate}px)`, flex: `0 0 ${childWidth}` }}
                        className={`${styles.scrollableItem} ${focusableClassName}`}>
                        { template(item, rendered) }
                    </Focusable>
                )
            }) }
        </div>
    )
}

ScrollableGrid.defaultProps = {
    data: [],
    focusableClassName: "",
    onTranslate: () => {},
    onClick: () => {},
    isClickable: () => true
}

ScrollableGrid.propTypes = {
    data: PropTypes.array.isRequired, 
    pathKey: PropTypes.string,
    routes: PropTypes.object,
    lazyLoad: PropTypes.func,
    coluns: PropTypes.number.isRequired,
    initOffset: PropTypes.string.isRequired,
    endOffset: PropTypes.string.isRequired,
    template: PropTypes.func.isRequired,
    isClickable: PropTypes.func,
    childWidth: PropTypes.string.isRequired,
    childHeight: PropTypes.string.isRequired,
    focusableClassName: PropTypes.string,
    onClick: PropTypes.func,
    onBack: PropTypes.func,
    onTranslate: PropTypes.func,
    behaviorHook: PropTypes.object
}

export default ScrollableGrid