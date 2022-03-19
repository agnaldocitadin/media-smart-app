import * as API from '../../lib/API'

export const useLoginHook = (onAthenticate) => {

    const authenticate = (user, passwd) => {
        API.authenticate(user, passwd)
            .then((user) => onAthenticate(user))
            .catch((err) => {
                //TODO
            })
    }

    return {
        authenticate
    }

}