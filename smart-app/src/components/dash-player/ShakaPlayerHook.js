import { useCallback, useEffect, useRef, useState } from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook'
import moment from 'moment'
import { Constants } from '../../globals/Configuration'
import { Utils } from '../utils/Utils'
import { Buttons } from '../basic-player/BasicPlayer'
import { setDashPlayerLoading } from '../../actions/dashPlayerAction'
import shaka from 'shaka-player'
import { ui } from 'shaka-player/dist/shaka-player.ui'
import { Configuration } from '../../globals/Configuration'

// http://dash.edgesuite.net/envivio/Envivio-dash2/manifest.mpd

export const useShakaPlayerHook = ({ autoPlay, MPDSource, previewSource, selectedAudio, selectedSubtitle, onPlay, onPause, onBack }) => {

    const { isLoading, user } = useMappedState(useCallback(state => ({ 
        isLoading: state.dashPlayerReducer.loading, 
        user: state.applicationReducer.authenticatedUser
    }), []))

    const dashVideoRef = useRef()
    const captionsDisplayerRef = useRef()
    const dispatch = useDispatch()
    const [ dashPlayer, setDashPlayer] = useState()
    const [ elapsedTime, setElapsedTime ] = useState(Utils.momentZero())
    const [ totalTime, setTotalTime ] = useState(Utils.momentZero())
    const [ updater, setUpdater ] = useState()
    const [ previewActive, setPreviewActive ] = useState(true)
    const activePlaybackButton = !dashVideoRef.current || dashVideoRef.current.paused ? Buttons.PLAY : Buttons.PAUSE

    const play = useCallback(() => {
        dashVideoRef.current.play()
        setPreviewActive(false)
        onPlay()
        setUpdater(setInterval(() => {
            setElapsedTime(moment.utc(dashVideoRef.current.currentTime * 1000))
        }, Constants.PLAYER_FREQUENCE_UPDATE))
    })

    const pause = useCallback(() => {
        dashVideoRef.current.pause()
        clearInterval(updater)
        setUpdater(null)
        onPause()
    })

    const back = useCallback(() => {
        setPreviewActive(true)
        onBack()
    })

    const readyToPlay = useCallback(() => {
        const duration = moment.utc(dashVideoRef.current.duration * 1000)
        setTotalTime(duration)
        if (autoPlay) play()
    })

    const checkAvailableLanguage = useCallback((trackLanguages, selectedLang, defaultLang) => {
        let track = trackLanguages.find(trackLang => trackLang === selectedLang)
        if (track) return track
        return defaultLang
    })

    const BUFFERING = useCallback((event) => {
        dispatch(setDashPlayerLoading(event.buffering))
    })

    const ONSTATEIDLE = useCallback((state) => {
        onChangeAudio()
        onChangeSubtitle()
    })

    const ERROR = useCallback((event) => {
        console.error('Error code', event.detail.code, 'object', event.detail);
    })

    const initPlayerSettings = () => {
        shaka.polyfill.installAll()
        const playerInstance = new shaka.Player(dashVideoRef.current)
        setDashPlayer(playerInstance)

        // Configs
        playerInstance.configure({
            // streaming: {
            //     bufferingGoal: 120
            // },
            textDisplayFactory: () => new ui.TextDisplayer(dashVideoRef.current, captionsDisplayerRef.current)
        })

        // TEMP
        window.shakaPlayer = playerInstance
        window.baseShaka = shaka
    }

    const onChangeAudio = () => {
        if (dashPlayer) {
            let audioLanguage = checkAvailableLanguage(dashPlayer.getAudioLanguages(), selectedAudio, Configuration.Media.DEFAULT_AUDIO_LANGUAGE)
            dashPlayer.selectAudioLanguage(audioLanguage)
        }
    }

    const onChangeSubtitle = () => {
        if (!dashPlayer) return
        if (selectedSubtitle !== "off") {
            let subtitleLanguage = checkAvailableLanguage(dashPlayer.getTextLanguages(), selectedSubtitle, Configuration.Media.DEFAULT_CAPTION_LANGUAGE)
            dashPlayer.selectTextLanguage(subtitleLanguage)
            dashPlayer.setTextTrackVisibility(true)
            return
        }
        dashPlayer.setTextTrackVisibility(false)
    }

    const onChangeMPDSource = () => {
        if (dashPlayer) {
            if (!MPDSource) {
                dashPlayer.unload()
                return
            }
            dashPlayer.load(MPDSource).then(() => readyToPlay())
            clearInterval(updater)
            setUpdater(null)
        }
    }

    const onChangePreviewSource = () => {
        if (previewSource && !previewActive) {
            setPreviewActive(true)
        }
    }

    const registerListeners = () => {
        if (dashPlayer) {
            dashPlayer.addEventListener('buffering', BUFFERING)
            dashPlayer.addEventListener('onstateidle', ONSTATEIDLE)
            dashPlayer.addEventListener('error', ERROR)
        }

        return () => {
            if (dashPlayer) {
                dashPlayer.removeEventListener('buffering', BUFFERING)
                dashPlayer.removeEventListener('onstateidle', ONSTATEIDLE)
                dashPlayer.removeEventListener('error', ERROR)
            }
        }
    }

    useEffect(initPlayerSettings, [])
    useEffect(onChangeMPDSource, [MPDSource])
    useEffect(onChangePreviewSource, [previewSource])
    useEffect(onChangeAudio, [selectedAudio])
    useEffect(onChangeSubtitle, [selectedSubtitle])
    useEffect(registerListeners, [dashPlayer, elapsedTime, totalTime, updater])

    return {
        dashVideoRef,
        captionsDisplayerRef,
        elapsedTime,
        totalTime,
        activePlaybackButton,
        play,
        pause,
        back,
        previewActive,
        isLoading
    }
}


// let estimator = new shaka.util.EWMABandwidthEstimator()
        // let estimatedMPDSource = new shaka.player.DashVideoSource("http://localhost:3002/files/manifest.mpd", null, estimator)
        // player.load("http://localhost:3002/files/manifest.mpd").then(() => readyToPlay())

        // Events
        // playerInstance.addEventListener('abrstatuschanged', (event) =>{
        //     // console.log("abrstatuschanged", )
        //     testaLegenda("abrstatuschanged")
        // })
        // playerInstance.addEventListener('adaptation', (event) =>{
        //     // console.log("adaptation", )
        //     testaLegenda("adaptation")
        // })
        // playerInstance.addEventListener('buffering', (event) =>{
        //     console.log("buffering", ) // true = mostrar loader, false = esconde loader
        // })
        // playerInstance.addEventListener('drmsessionupdate', (event) =>{
        //     // console.log("drmsessionupdate", )
        //     testaLegenda("drmsessionupdate")
        // })
        // playerInstance.addEventListener('emsg', (event) =>{
        //     // console.log("emsg", )
        //     testaLegenda("emsg")
        // })
        // playerInstance.addEventListener('expirationupdated', (event) =>{
        //     // console.log("expirationupdated", )
        //     testaLegenda("expirationupdated")
        // })
        // playerInstance.addEventListener('largegap', (event) =>{
        //     // console.log("largegap", )
        //     testaLegenda("largegap")
        // })
        // playerInstance.addEventListener('loading', (event) =>{
        //     // console.log("loading", )
        //     testaLegenda("loading")
        // })
        // playerInstance.addEventListener('manifestparsed', (event) =>{
        //     // console.log("manifestparsed", )
        //     testaLegenda("manifestparsed")
        // })
        // playerInstance.addEventListener('onstatechange', (event) =>{
        //     // console.log("onstatechange", )
        //     testaLegenda("onstatechange")
        // })
        // playerInstance.addEventListener('onstateidle', (event) =>{
        //     // console.log("onstateidle", )
        //     testaLegenda("onstateidle")
        // })
        // playerInstance.addEventListener('streaming', (event) =>{
        //     // console.log("streaming", )
        //     testaLegenda("streaming")
        // })
        // playerInstance.addEventListener('textchanged', (event) =>{
        //     // console.log("textchanged", )
        //     testaLegenda("textchanged")
        // })
        // playerInstance.addEventListener('texttrackvisibility', (event) =>{
        //     // console.log("texttrackvisibility", )
        //     testaLegenda("texttrackvisibility")
        // })
        // playerInstance.addEventListener('timelineregionadded', (event) =>{
        //     // console.log("timelineregionadded", )
        //     testaLegenda("timelineregionadded")
        // })
        // playerInstance.addEventListener('timelineregionenter', (event) =>{
        //     // console.log("timelineregionenter", )
        //     testaLegenda("timelineregionenter")
        // })
        // playerInstance.addEventListener('timelineregionexit', (event) =>{
        //     // console.log("timelineregionexit", )
        //     testaLegenda("timelineregionexit")
        // })
        // playerInstance.addEventListener('trackschanged', (event) =>{
        //     // console.log("trackschanged", )
        //     testaLegenda("trackschanged")
        // })
        // playerInstance.addEventListener('unloading', (event) =>{
        //     // console.log("unloading", )
        //     testaLegenda("unloading")
        // })
        // playerInstance.addEventListener('variantchanged', (event) =>{
        //     // console.log("variantchanged", )
        //     testaLegenda("variantchanged")
        // })