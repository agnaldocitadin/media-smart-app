import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { applicationReady, applicationError } from '../../actions/applicationAction'
import * as API from '../../../../libstream/src/API'
import { navigationAgent, NavigationContext, useNavigationHook } from '../navigation/NavigationHook'
import Navigator from '../navigation/Navigator'
import ApplicationStartup from './ApplicationStartup'
import { Application } from '../../lib/Application'
import ViewError from '../view-error/ViewError'

export const App = new Application()

const ApplicationLoader = ({ bindControls, close }) => {

    const { 
        toUp,
        toDown,
        toLeft,
        toRight,
        click,
        back,
        navigationReady,
        state,
        context,
        setState
    } = useNavigationHook()

    const dispatch = useDispatch()
    const { error } = useMappedState(useCallback(state => ({ error: state.applicationReducer.error }), []))

    const checkAvailableServices = useCallback(() => {
        if (error) {
            dispatch(applicationError(null))
        }
        API.checkAvailableServices()
            .then(() => dispatch(applicationReady(true)))
            .catch(err => dispatch(applicationError(err)))
    })

    useEffect(() => {
        App._bindActions(close)
        navigationReady()
        checkAvailableServices()
    }, [])

    useEffect(() => {
        navigationAgent._update(context, state, setState)
        const fn = bindControls({ 
            up: toUp, 
            down: toDown, 
            left: toLeft, 
            right: toRight, 
            enter: click,
            back: back
        })
        return () => fn()
    }, [state.time])

    return (
        <React.Fragment>
            <Navigator context={NavigationContext} />
            { error ? <ViewError message={error} handleTry={checkAvailableServices} handleClose={close} /> : <ApplicationStartup/> } 
        </React.Fragment>
    )
}

ApplicationLoader.defaultProps = {
    close: () => {}
}

ApplicationLoader.propTypes = {
    bindControls: PropTypes.func.isRequired,
    close: PropTypes.func
}

export default ApplicationLoader