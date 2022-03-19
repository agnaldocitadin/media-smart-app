import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../badge/Badge';
import i18n from '../../globals/i18n'
import css from './LiveBadge.module.css'

const LiveBadge = ({ className }) => {
    return <Badge text={i18n.t("live")} className={`${css.content} ${className}`}/>
}

LiveBadge.defaultProps = {
    className: ""
}

LiveBadge.propTypes = {
    className: PropTypes.string
}

export default LiveBadge