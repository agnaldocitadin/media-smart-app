import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'

const Content = ({ children, style }) => {
    return(
        <div className={`${styles.content}`} style={style}>
            { children }
        </div>
    )
}

Content.defaultProps = {
    style: {}
}

Content.propTypes = {
    style: PropTypes.object
}

export default Content