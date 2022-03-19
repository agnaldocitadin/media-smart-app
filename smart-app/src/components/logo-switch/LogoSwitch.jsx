import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Utils } from '../utils/Utils'
import css from './LogoSwitch.module.css'

/**
 *
 *
 * @param {*} { source, className }
 * @returns
 */
const LogoSwitch = ({ source, className, duration }) => {

    const ref = useRef()
    const [ flushedSource, setFlushedSource ] = useState()

    useEffect(() => {
        Utils.sequencer().play([
            () => ref.current.style.setProperty("--duration", `${duration}ms`),
            () => ref.current.style.opacity = 0,
            duration,
            () => setFlushedSource(source),
            () => ref.current.style.opacity = 1,
        ])
    }, [source])

    return (
        <div ref={ref} className={`${css.logo} ${css.anim} ${className}`}>
            <img src={flushedSource} />
        </div>
    )
}

LogoSwitch.defaultProps = {
    className: "",
    duration: 140
}

LogoSwitch.propTypes = {
    source: PropTypes.string,
    duration: PropTypes.number
}

export default LogoSwitch