import React from 'react'
import PropTypes from 'prop-types'
import css from './MediaContent.module.css'

const MediaContent = ({ show, className, children }) => {

    const contentStyle = {
        opacity: show ? 1 : 0,
        transform: `translateX(${show ? 0 : "-4%"})`
    }

    return (
        <div className={`${className} ${css.anim}`} style={contentStyle} >
            { children }
        </div>
    )
}

MediaContent.defaultProps = {
    show: false,
    className: ""
}

MediaContent.propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string
}

export default MediaContent