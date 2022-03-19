import React, { useEffect, useRef, useContext, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { ReactUtils } from '../utils/ReactUtils'
import { NavigationContext } from './NavigationHook'
import { defaultLeaveBehavior, defaultSelectBehavior  } from './FocusableNavBehavior'

const Focusable = ({
    id,
    children, 
    onClick, 
    style,
    clickable,
    onBuild,
    onDestroy,
    value,
    margin,
    padding,
    background,
    className
}) => {

    const context = useContext(NavigationContext)
    const ref = useRef()
    const _style = { ...style, ...{ margin, padding, background }}
    
    useEffect(() => {
        // Register component on context
        let component = ReactUtils.findComponentFromDOM(ref.current)
        context.set(id, component)
        onBuild(id)
        
        // Unregister component from context
        return () => {
            onDestroy(id)
            context.delete(id)
        }
        
    }, [])

    return <span id={id} ref={ref} tabIndex="0" className={className} onClick={clickable ? (event) => onClick(event, value) : null} style={_style}>{ children }</span>
}

Focusable.defaultProps = {
    style: {},
    onBuild: () => null,
    onDestroy: () => null,
    onSelect: defaultSelectBehavior,
    onLeave: defaultLeaveBehavior,
    onClick: () => null,
    onBack: () => null,
    onKeyEvent: () => null,
    selectable: true,
    clickable: true,
    routes: {},
    margin: "0",
    padding: "0",
    background: "none",
    className: ""
}

Focusable.propTypes = {
    id: PropTypes.string.isRequired,
    style: PropTypes.object,
    pathKey: PropTypes.string,
    routes: PropTypes.object,
    value: PropTypes.any,
    margin: PropTypes.string,
    padding: PropTypes.string,
    background: PropTypes.string,
    className: PropTypes.string,
    selectable: PropTypes.bool,
    clickable: PropTypes.bool,
    onClick: PropTypes.func,
    onBack: PropTypes.func,
    onKeyEvent: PropTypes.func,
    onSelect: PropTypes.func,
    onLeave: PropTypes.func,
    onBuild: PropTypes.func,
    onDestroy: PropTypes.func
}

export default Focusable
