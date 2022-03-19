import React from 'react'
import styles from './Layout.module.css'

const RightContent = ({ children, className = "" }) => {
    return(
        <div className={`${styles.rightContent} ${className}`}>
            { children }
        </div>
    )
}

export default RightContent