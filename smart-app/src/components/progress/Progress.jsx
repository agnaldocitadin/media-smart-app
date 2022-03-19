import React from 'react'
import PropTypes from 'prop-types'
import css from './Progress.module.css'

const Progress = ({ 
    progress = 0,
    buffer = 0, 
    progressClass = "", 
    width = "100%", 
    height = "1vh",
    color = "white"
}) => {

    const progressStyle = {...calculateProgress(progress, height), ...{ background: color}} 
    const bufferStyle = calculateProgress(buffer, height)

    return(
        <div style={{ width: width, height: height }} className={progressClass}>
            <div className={css.timeFull}/>
            <div style={bufferStyle} className={css.buffered}/>
            <div style={progressStyle} className={`${css.timeElapsed}`}/>
        </div>
    )
}

const calculateProgress = (progress, height) => {
    return { 
        width: (progress > 100 ? 100 : progress) + "%",
        height: "100%",
        marginTop: "-" + height
    }
}

export default Progress