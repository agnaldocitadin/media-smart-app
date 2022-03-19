import { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { MediaDetailStates, setActiveMediaDetail, setPlayingMedia, stateMediaDetail } from '../../actions/mediaDetailAction';
import { setDashPlayerLoading } from '../../actions/dashPlayerAction'
import * as API from '../../../../libstream/src/API'
import { MediaClipTypes } from '../../../../libstream/src/Enums'
import { navigationAgent } from '../navigation/NavigationHook';
import { Utils } from '../utils/Utils';
import { MovieBehavior } from './behavior/MovieBehavior';
import { TVShowBehavior } from './behavior/TVShowBehavior';
import { ChannelBehavior } from './behavior/ChannelBehavior';
import { Aspect } from '../utils/Aspect';
import { FocusableUtils } from '../navigation/FocusableUtils';
import { Configuration } from '../../globals/Configuration';

// const getHook = (type) => {
//     switch (MediaClipTypes.convert(type)) {
//         case MediaClipTypes.MOVIE:
//             return MovieBehavior

//         case MediaClipTypes.TV_SHOW:
//             return TVShowBehavior

//         case MediaClipTypes.LIVE_CHANNEL:
//             return ChannelBehavior
//     }
// }

/**
 *
 *
 * @returns
 */
export const useMediaClipInfoHook = () => {

    const { 
        mediaClip,
        mediaClipInfoState,
        user

    } = useMappedState(useCallback(state => ({
        mediaClip: state.mediaDetailReducer.media,
        mediaClipInfoState: state.mediaDetailReducer.mediaClipInfoState,
        user: state.applicationReducer.authenticatedUser
    })))

    const dispatch = useDispatch()
    const [ backFocusTo, setBackFocusTo ] = useState()
    const [ previewSource, setPreviewSource ] = useState()
    const [ logoSource, setLogoSource ] = useState()
    const [ MPDSource, setMPDSource ] = useState()
    const [ audios, setAudios ] = useState()
    const [ subtitles, setSubtitles ] = useState()
    const [ selectedAudio, setSelectedAudio ] = useState()
    const [ selectedSubtitle, setSelectedSubtitle ] = useState()
    const [ userProgress, setUserProgress ] = useState(14)
    const [ manifest, setManifest ] = useState()

    //OK
    const handlePlay = () =>{
        const cursor = navigationAgent.getCursor()
        Utils.sequencer().play([
            () => cursor.opacity(0),
            () => navigationAgent.selectFocusable("shakaPlayer_bt_player_playpause"),
            () => dispatch(setPlayingMedia(true)),
            () => dispatch(stateMediaDetail(MediaDetailStates.NOTHING)),
            () => dispatch(setDashPlayerLoading(true)),
            () => API.loadMPDSource(manifest.MPDFile).then(source => setMPDSource(source))
        ])
    }

    //OK
    const handleBackFromMediaClipInfo = useCallback(() => {
        const cursor = navigationAgent.getCursor()
        cursor.opacity(0)
        dispatch(setActiveMediaDetail(false))
    })
    
    const handleBackFromPlayer = useCallback(() => {
        setMPDSource(null)
        dispatch(setPlayingMedia(false))
        dispatch(stateMediaDetail(MediaDetailStates.ALL_INFOS))
    })

    const handleAddRemoveFavorite = useCallback(() => {
        console.log("favorite", manifest)
    })

    const handleOpenAudioSelector = useCallback((event) => {
        setBackFocusTo("_bt_audios")
        handleLanguageSelector("audio_selector", MediaDetailStates.AUDIO_SELECT)
    })

    const handleOpenSubtitleSelector = useCallback((event) => {
        setBackFocusTo("_bt_subtitles")
        handleLanguageSelector("subtitle_selector", MediaDetailStates.SUBTITLE_SELECT)
    })

    const handleLanguageSelector = useCallback((pathKey, state) => {
        const cursor = navigationAgent.getCursor()
        const button = navigationAgent.findFocusable("pathKey", pathKey)[0]
        const id = FocusableUtils.from(button).getID()
        Utils.sequencer().play([
            () => cursor.opacity(0),
            () => dispatch(stateMediaDetail(state)),
            200,
            () => navigationAgent.selectFocusable(id)
        ])
    })

    const handleCloseAudioSelector = useCallback(() => {
        backToAllInfos()
    })
    
    const handleCloseSubtitleSelector = useCallback(() => {
        backToAllInfos()
    })

    const handleOpenSeasonsBrowser = useCallback(() => {
        const cursor = navigationAgent.getCursor()
        setBackFocusTo("_bt_seasons")
        Utils.sequencer().play([
            () => cursor.opacity(0),
            () => dispatch(stateMediaDetail(MediaDetailStates.SEASONS_BROWSER)),
            200,
            () => navigationAgent.selectFocusable("_seasons_0")
        ])
        
    })

    const handleCloseSeasonsBrowser = useCallback(() => {
        backToAllInfos()
    })

    const handleChangeAudio = useCallback((language) => {
        setSelectedAudio(language)
    })
    
    const handleChangeSubtitle = useCallback((language) => {
        setSelectedSubtitle(language)
    })

    const backToAllInfos = useCallback(() => {
        const cursor = navigationAgent.getCursor()
        cursor.opacity(0)
        dispatch(stateMediaDetail(MediaDetailStates.ALL_INFOS))  
    })

    const getButtonToFocus = useCallback(() => {
        if (backFocusTo) return backFocusTo
        return "_bt_play"
    }, [backFocusTo])

    const getPreferredAudio = useCallback((mediaClip, audios) => {
        let mediaAudioLang = mediaClip.preferredAudio
        let userPref = user.preferences.preferredAudioLanguage
        let preferredUserAudio = audios.find(audio => audio.language === userPref) ? userPref : null
        return (mediaAudioLang || preferredUserAudio || Configuration.Media.DEFAULT_AUDIO_LANGUAGE)
    })

    const getPreferredSubtitle = useCallback((mediaClip, subtitles) => {
        let mediaSubtitleLang = mediaClip.preferredSubtitle
        let userPref = user.preferences.preferredSubtitleLanguage
        let preferredUserAudio = userPref === "off" ? userPref : (subtitles.find(sub => sub.language === userPref) ? userPref : null)
        return (mediaSubtitleLang || preferredUserAudio || Configuration.Media.DEFAULT_CAPTION_LANGUAGE)
    })

    const onChangeInfoState = () => {
        if (mediaClipInfoState === MediaDetailStates.ALL_INFOS) {
            let button = getButtonToFocus()
            setBackFocusTo(null)
            Utils.sequencer().play([ 290, () => navigationAgent.selectFocusable(button)])
        }
    }

    const onChangeMediaClip = () => {
        if (mediaClip) {
            
            // Com base no tipo de Media: ->

            // - Recupera o manifest-release da media (recuperar do mediaClip)
            let releaseManifest
            switch (MediaClipTypes.convert(mediaClip.type)) {
                case MediaClipTypes.MOVIE:
                    releaseManifest = mediaClip.releaseManifest
                    break
        
                case MediaClipTypes.TV_SHOW:
                    releaseManifest = mediaClip.subMediaClips[0].mediaClips[0].releaseManifest //TODO pegar do primeiro ou em visualizacao
                    break
        
                case MediaClipTypes.LIVE_CHANNEL:
                    releaseManifest = mediaClip.releaseManifest
                    break
            }
            setManifest(releaseManifest)

            // - extrai os audios e subtitles
            let audios = releaseManifest.audios
            setAudios(audios)

            let subtitles = releaseManifest.subtitles
            setSubtitles(subtitles)

            let selectedAudio = getPreferredAudio(mediaClip, audios)
            setSelectedAudio(selectedAudio)

            let selectedSubtitle = getPreferredSubtitle(mediaClip, subtitles)
            setSelectedSubtitle(selectedSubtitle)

            // - load LOGO
            API.loadImageSource(mediaClip.logo, Aspect.resolution()).then(source => setLogoSource(source))

            // - load PREVIEW
            API.loadImageSource(mediaClip.poster, Aspect.resolution()).then(source => setPreviewSource(source))

            // - load Trailer (se usuário permite)
            

            // TODO setLanguagesPref
            // mediaClip.preferredAudio = user.preferences.preferredAudioLanguage
            // mediaClip.preferredSubtitle = user.preferences.preferredCaptionLanguage
            
            // getHook(mediaClip.type).changeSelectedMedia(mediaClip, setStateDetail)
            // API.loadImageSource(mediaClip.logo, Aspect.resolution()).then(source => {
            //     setStateDetail(state => {
            //         return {
            //             ...state,
            //             logoSource: source
            //         }
            //     })
            // })
        }
    }

    useEffect(onChangeInfoState, [mediaClipInfoState])
    useEffect(onChangeMediaClip, [mediaClip])

    return {
        mediaClip: (mediaClip || {}),
        previewSource,
        logoSource,
        MPDSource,
        audios: (audios || []),
        subtitles: (subtitles || []),
        selectedAudio,
        selectedSubtitle,
        mediaClipInfoState,
        userProgress,

        // handlers language
        // ...
        handleOpenAudioSelector,
        handleOpenSubtitleSelector,
        handleCloseAudioSelector,
        handleCloseSubtitleSelector,
        handleChangeAudio,
        handleChangeSubtitle,

        // handlers player
        // ...
        handlePlay,
        handleBackFromMediaClipInfo,
        handleBackFromPlayer,

        // Others
        // ...
        handleAddRemoveFavorite,
        handleOpenSeasonsBrowser,
        handleCloseSeasonsBrowser



        //Deprecated
        // loadedMediaClip: stateDetail.loadedMediaClip,
        // logoSource: stateDetail.logoSource,
        // previewSource: stateDetail.previewSource,
        // MPDSource: stateDetail.MPDSource,
        // audios: (stateDetail.manifest.audios || []),
        // subtitles: (stateDetail.manifest.subtitles || []),
        // showAudioSelector: mediaClipInfoState === MediaDetailStates.AUDIO_SELECT,
        // showSubtitleSelector: mediaClipInfoState === MediaDetailStates.SUBTITLE_SELECT,
        // handleBack,
        // handlePlayClick,
        // handlePlayerBack,
        // handleSeasonsClick,
        // handleFavoriteClick,
        // handleAudioSelectClick,
        // handleSubtitleSelectClick,
        
    }
}
