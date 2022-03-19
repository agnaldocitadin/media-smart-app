import React from 'react'
import styles from './Layout.module.css'

const LeftContent = ({ children, className = "" }) => {
    return(
        <div className={`${styles.leftContent} ${className}`}>
            { children }
        </div>
    )
}

export default LeftContent