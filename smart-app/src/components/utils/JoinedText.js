import React from 'react'
import PropTypes from 'prop-types'

/**
 * OK
 *
 * @param {*} { arrayTexts }
 * @returns
 */
const JoinedText = ({ arrayTexts, className }) => {
    return <span className={className}>{arrayTexts.join(" . ")}</span>
}

JoinedText.propTypes = {
    arrayTexts: PropTypes.array.isRequired,
}

export { JoinedText as default }