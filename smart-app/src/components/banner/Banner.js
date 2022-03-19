import React from 'react'
import PropTypes from 'prop-types'
import { Utils } from '../utils/Utils'
import styles from './Banner.css'

const Banner = ({ 
    source, 
    name, 
    width, 
    height, 
    bannerClass
}) => {

    return (
        <div className={`${styles.content} ${bannerClass}`} style={{ width: width, height: height }}>
            <RenderImage source={source} name={name} width={width}/>
        </div>
    )
}

const RenderImage = ({ source, name, width }) => {
    return Utils.branch(<img src={source} alt={name} style={{ width: width }} />, source)
}

Banner.defaultProps = {
    width: "100%", 
    height: "100%", 
    bannerClass: ""
}

Banner.propTypes = {
    source: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.string, 
    height: PropTypes.string, 
    bannerClass: PropTypes.string
}

export default Banner