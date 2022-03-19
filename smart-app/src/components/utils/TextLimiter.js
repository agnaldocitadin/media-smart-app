import React from 'react'
import PropTypes from 'prop-types'

/**
 *
 *
 * @param {*} { text, limitCharacters, limited }
 * @returns
 */
const TextLimiter = ({ className, text, limitCharacters, limited }) => {
    const finalText = limited ? dropCharacters(text, limitCharacters) : text
    return(
        <p className={className}>{finalText}</p>
    )
}

const dropCharacters = (text, limit) => {
    return text.length > limit ? text.substr(0, limit) + "..." : text
}

TextLimiter.defaultProps = {
    limited: false,
}

TextLimiter.propTypes = {
    text: PropTypes.string.isRequired,
    limitCharacters: PropTypes.number.isRequired,
    limited: PropTypes.bool
}

export { TextLimiter as default }