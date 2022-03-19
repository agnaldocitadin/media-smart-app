import React, { useCallback, useEffect } from 'react'
import { useLoginHook } from './LoginHook'

const Login = ({ onUserHasAuthenticated }) => {
    
    const { authenticate } = useLoginHook(onUserHasAuthenticated)

    const login = useCallback(() => {
        authenticate("user", "passwd")
    }, [])

    useEffect(() => {
        login()
    }, [])

    return (
        <div>
            <button onClick={login}>Logar</button>
            <h1>login</h1>
            <p><input type="text" name="user"/></p>
            <p><input type="password" name="passwd"/></p>
        </div>
    )
}

export default Login