import React from 'react'
import css from './Badge.module.css'

const Badge = ({ text, className }) => {
    return <span className={`${css.content} ${className}`}>{text}</span>
}

export default Badge