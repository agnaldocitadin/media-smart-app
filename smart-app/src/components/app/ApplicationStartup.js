import React from 'react'
import { APPLICATION_COMPONENT, LOGIN_COMPONENT, SWITCHER_COMPONENT } from '../../actions/applicationAction'
// import Login from '../login/Login'
// import UserSwitcher from '../login/UserSwitcher'
import Application from './Application'
import { useStartupHook } from './StartupHook'
import Spinner from '../spinner/Spinner'

/**
 *
 *
 * @returns
 */
export default () => {

    // FIXME Esse hook tá meio zuado!
    const { userComponent, startSessionFromUser } = useStartupHook()

    switch(userComponent) {
        case APPLICATION_COMPONENT:
            return <Application/>
            
        // case LOGIN_COMPONENT:
        //     return <Login onUserHasAuthenticated={startSessionFromUser}/>

        // case SWITCHER_COMPONENT:
        //     return <UserSwitcher onUserHasChosen={startSessionFromUser}/>
        
        default:
            return <Spinner/>
    }
    
}