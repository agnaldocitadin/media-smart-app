import React, { useCallback } from 'react'
import { Constants } from '../../globals/Constants'
import { useLoginHook } from './LoginHook'

const UserSwitcher = ({ onUserHasChosen }) => {
    const { authenticate } = useLoginHook(onUserHasChosen)
    const chooseUser = (user) => {
        //TODO recuperar o user/passwd de cada usuario
        authenticate("user", "passwd")
    }

    return (
        <div>
            <h1>Choose user</h1>
            <button onClick={useCallback(() => chooseUser("1"), ["1"])}>[ Eu 1 ]</button>
            <button onClick={useCallback(() => chooseUser("2"), ["2"])}>[ Eu 2 ]</button>
            <button onClick={useCallback(() => chooseUser("3"), ["3"])}>[ Eu 3 ]</button>
        </div>
    )
}

export default UserSwitcher