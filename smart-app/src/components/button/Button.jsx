import React from 'react'
import PropTypes from 'prop-types'
import { Utils } from '../utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Focusable from '../navigation/Focusable'
import CSS from './Button.module.css'
// import appCSS from '../app/App.css'
// import styled from 'styled-components'

const Button = ({ 
    id,
    icon, 
    text,
    textColor,
    iconColor,
    rounded,
    background,
    margin,
    padding,
    iconSpace,
    fontSize,
    pathKey,
    routes,
    onAction,
    onBack,
    onKeyEvent,
    onLeave,
    onSelect,
    selectable,
    clickable,
    fill
}) => {

    return (
        <Focusable
            id={id}
            pathKey={pathKey}
            routes={routes}
            selectable={selectable}
            clickable={clickable}
            onClick={onAction}
            onBack={onBack}
            onKeyEvent={onKeyEvent}
            onLeave={onLeave}
            onSelect={onSelect}
            className={`${CSS.button} ${ rounded ? CSS.button_rounded : "" }`}
            margin={margin}
            padding={padding}
            background={background}
            style={{ width: fill ? "100%" : "auto" }}>
            { Utils.branch(<span style={{ paddingRight: iconSpace, fontSize: fontSize }}><FontAwesomeIcon color={iconColor} icon={icon}/></span>, icon) }
            { Utils.branch(<span style={{ color: textColor, fontSize: fontSize }}>{ text }</span>, text) }
        </Focusable>
    )
}

Button.defaultProps = {
    textColor: "#aaaaaa",
    iconColor: "#aaaaaa",
    rounded: true,
    background: "none",
    margin: "0",
    padding: "1.5vh 2vh",
    iconSpace: "1vh",
    fontSize: "",
    selectable: true,
    clickable: true,
    fill: false
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.object,
    text: PropTypes.string,
    textColor: PropTypes.string,
    iconColor: PropTypes.string,
    pathKey: PropTypes.string,
    routes: PropTypes.object,
    onAction: PropTypes.func,
    onBack: PropTypes.func,
    onKeyEvent: PropTypes.func,
    onLeave: PropTypes.func,
    onSelect: PropTypes.func,
    rounded: PropTypes.bool,
    background: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    iconSpace: PropTypes.string,
    fontSize: PropTypes.string,
    selectable: PropTypes.bool,
    clickable: PropTypes.bool,
    fill: PropTypes.bool
}

export default Button