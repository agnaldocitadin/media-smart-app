import React from 'react'
import PropTypes from 'prop-types'
import { StoreContext } from 'redux-react-hook'
import { store } from '../../store'
import ApplicationLoader from './ApplicationLoader'

const ApplicationEntryPoint = ({ bindControls, close }) => {
    return (
        <StoreContext.Provider value={store}>
            <ApplicationLoader bindControls={bindControls} close={close} />
        </StoreContext.Provider>
    )
}

ApplicationEntryPoint.propTypes = {
    bindControls: PropTypes.func.isRequired,
    close: PropTypes.func
}

export default ApplicationEntryPoint