import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CSS from './StarGroup.module.css'

/**
 *
 *
 * @param {*} { rating, showRating, showStars }
 * @returns
 */
const StarGroup = ({ value }) => {
    return (
        <span className={CSS.rating}>
            <Star refValue={value} fillValue={1} />
            <Star refValue={value} fillValue={2} />
            <Star refValue={value} fillValue={3} />
            <Star refValue={value} fillValue={4} />
            <Star refValue={value} fillValue={5} />
        </span>
    )
}

const Star = ({ refValue, fillValue }) => {
    return <FontAwesomeIcon icon={faStar} className={ refValue >= fillValue ? CSS.filledStar : CSS.emptyStar }/>
}

StarGroup.defaultProps = {
    value: 0
}

StarGroup.propTypes = {
    value: PropTypes.number.isRequired
}

export default StarGroup