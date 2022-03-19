import { useCallback, useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { activeMainApplication, applicationError, setMediaClipSectionCollections, selectMediaSection, registerUser } from '../../actions/applicationAction'
import * as API from '../../../../libstream/src/API'

export const useStartupHook = () => {

    const dispatch = useDispatch()
    const { userComponent, ready } = useMappedState(useCallback(state => ({
        userComponent: state.applicationReducer.userComponent, // TODO setar o componente conforme as confs lidas.
        ready: state.applicationReducer.ready
    }), []))

    const startSessionFromUser = useCallback((user) => {

        Promise.all([ 
            API.loadMainContent(user, "en_US"),
            API.loadMovieSuggestions(user, "en_US"),
            API.loadTvShowSuggestions(user, "en_US"),
            API.loadAvailableChannels(user, "en_US"),
            API.loadFavorites(user, "en_US")
        ])
        .then(([home, movies, tvShows, channels, favorites]) => {
            dispatch(registerUser(user))
            dispatch(setMediaClipSectionCollections(home, movies, tvShows, channels, favorites))
            dispatch(selectMediaSection(home))
            dispatch(activeMainApplication())
        })
        .catch((err) => dispatch(applicationError(err)))

    }, [])

    useEffect(() => {
        if (ready) {
            
            // TODO fazer aqui a leitura das configs do dispositivo.
            // Decide aqui os passos antes de mostrar a aplicação
            // dispatch(activeLoginComponent())
            // dispatch(activeUserSwitcherComponent())
            // dispatch(activeMainApplication())

            API.authenticate("user1", "passwd1")
                .then(user => startSessionFromUser(user))
                .catch(err => dispatch(applicationError(err)))
            
        }
    }, [ready])

    return {
        userComponent,
        startSessionFromUser
    }
}