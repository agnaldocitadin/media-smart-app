import React from 'react'
import PropTypes from 'prop-types'
import styles from '../components/app/Styles.css'

const _Template = () => {

    const {  } = useMappedState(useCallback(state => ({ name: reducer.attribute }), []))

    return(
        <div/>
    )
}

_Template.defaultProps = {
    test: "",
}

_Template.propTypes = {
    test: PropTypes.string.isRequired,
}

export default _Template