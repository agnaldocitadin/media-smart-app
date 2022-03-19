import React from 'react'
import PropTypes from 'prop-types'

const Time = ({ seconds }) => {
    const minutes = seconds / 60
    return <span><i>{minutes} min</i></span>
}

Time.propTypes = {
    seconds: PropTypes.number.isRequired
}

export default Time