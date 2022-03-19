import React from 'react'
import PropTypes from 'prop-types'
import i18n from '../../globals/i18n'
import Progress from '../progress/Progress'
import { useChannelHook } from './ChannelHook'
import styles from './Channel.css'

const Channel = (props) => {
    const hooks = useChannelHook(props)
    return(
        <div className={styles.channel}>
            <ChannelLogo {...hooks}/>
            <Info {...props} {...hooks}/>
        </div>
    )
}

const ChannelLogo = ({ source, stretch }) => {
    return <div style={{ backgroundImage: `url(${source})` }} className={`${styles.logo} ${stretch == "X" ? styles.stretchX : styles.stretchY}`}/>
}

const Info = ({ showInfo, now, programName }) => {
    if (!showInfo) {
        return null
    }
    return (
        <div>
            <Progress progress={10} color="red" height=".7vh"/>
            <div className={styles.info}>
                <span>{now ? i18n.t("now") : i18n.t("next")}</span>
                <p>{programName}</p>
            </div>
        </div>
    )
}

Channel.propTypes = {
    source: PropTypes.string,
    showInfo: PropTypes.bool,
    now: PropTypes.bool,
    programName: PropTypes.string
}

export default Channel