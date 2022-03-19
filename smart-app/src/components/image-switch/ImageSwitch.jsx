import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Utils } from '../utils/Utils'
import CSS from './ImageSwitch.module.css'

const ImageSwitch = ({ src, duration, timingFunction, delay }) => {

    const [ state, setState ] = useState({ top: null, bottom: null, show: false })

    useEffect(() => {
        setState(state => {
            return {
                top: src,
                bottom: state.top,
                show: false
            }
        })

        setTimeout(() => {
            setState(state => {
                return {
                    ...state,
                    show: true
                }
            })
        }, 100);

    }, [src])

    const trans = state.show ? { transition: `opacity ${duration}ms ${timingFunction} ${delay}ms` } : {}

    return (
        <React.Fragment>
            { Utils.branch(<div className={CSS.content} style={{ backgroundImage: `url(${state.bottom})`, width: "100vw", height: "100vh", position: "absolute" }}/>, state.bottom) }
            { Utils.branch(<div className={`${CSS.content} ${CSS.fade}`} style={{
                ...trans,
                opacity: state.show ? 1 : 0, 
                backgroundImage: `url(${state.top})`, 
                width: "100vw", 
                height: "100vh", 
                position: "absolute" }
            }/>, state.top) }

        </React.Fragment>
    )
}

ImageSwitch.defaultProps = {
    duration: 1000,
    timingFunction: "linear",
    delay: 0
}

ImageSwitch.propTypes = {
    src: PropTypes.string,
    duration: PropTypes.number,
    timingFunction: PropTypes.string,
    delay: PropTypes.number
}

export default ImageSwitch