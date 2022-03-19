import React from 'react'
import PropTypes from 'prop-types'
import { faCircle as faCircleR } from '@fortawesome/free-regular-svg-icons'
import { faCircle as faCircleS, faClosedCaptioning, faLayerGroup, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import i18n from '../../globals/i18n'
import Button from '../button/Button'
import ImageSwitch from '../image-switch/ImageSwitch'
import ListOptions from '../list-options/ListOptions'
import LiveBadge from '../live-badge/LiveBadge'
import Progress from '../progress/Progress'
import Spinner from '../spinner/Spinner'
import { Utils } from '../utils/Utils'
import { useBasicPlayerHook } from './BasicPlayerHook'
import CSS from './BasicPlayer.module.css'

export const Buttons = {
    PLAY: 0,
    PAUSE: 1
}

const playbackButtonRoutes = {
    EVENT_RIGHT: ["caption_button", "playlist_button"]
}

const playlistButtonRoutes = {
    EVENT_LEFT: ["playback_button"],
    EVENT_RIGHT: ["caption_button"]
}

const captionButtonRoutes = {
    EVENT_LEFT: ["playback_button", "playlist_button"],
    EVENT_UP: ["player_caption"],
}

const audioOptionsRoutes = {
    EVENT_UP: ["audio_options"],
    EVENT_DOWN: ["audio_options"],
    EVENT_RIGHT: ["subtitle_options"]
}

const subtitleOptionsRoutes = {
    EVENT_UP: ["subtitle_options"],
    EVENT_DOWN: ["subtitle_options"],
    EVENT_LEFT: ["audio_options"]
}

const BasicPlayer = (props) => {

    const {
        id,
        videoRef,
        captionsDisplayerRef,
        videoSource,
        previewSource,
        audios,
        subtitles,
        selectedAudio,
        selectedSubtitle,
        totalTime,
        elapsedTime,
        buffer,
        previewActive,
        activePlaybackButton,
        showLoading,
        renderControls,
        onChangeAudio,
        onChangeSubtitle,
    } = props
    
    const hook = useBasicPlayerHook(props)
    const buttonIcon = activePlaybackButton === Buttons.PLAY ? faPlay : faPause
    const progress = Utils.percentElapsedTime(moment(0, "s"), totalTime, elapsedTime)
    const bufferPos = Utils.percentElapsedTime(moment(0, "s"), totalTime, buffer)
    const formatedElapsedTime = Utils.momentToMinutes(elapsedTime) > 60 ? elapsedTime.format("HH:mm:ss") : elapsedTime.format("mm:ss")
    const formatedTotalTime = Utils.momentToMinutes(totalTime) > 60 ? totalTime.format("HH:mm:ss") : totalTime.format("mm:ss")

    return (
        <React.Fragment>
            
            { Utils.branch(<Spinner/>, showLoading) }
            <video ref={videoRef} src={videoSource} className={CSS.video}></video>
            { Utils.branch(<ImageSwitch src={previewSource} duration={350} />, previewActive) }
            <div ref={captionsDisplayerRef} className={CSS.captionsDisplayer}/>

            { Utils.branch(
                <div className={CSS.controls} style={{ opacity: hook.hiddenControls ? 0 : 1 }}>
                    <Button
                        id={`${id}_bt_player_playpause`}
                        pathKey="playback_button"
                        routes={playbackButtonRoutes}
                        icon={buttonIcon}
                        iconSpace="0"
                        margin="0 1vh 0 0"
                        onAction={hook.playPauseAction}
                        onBack={hook.onBackFromPlayer}
                        onKeyEvent={hook.onKeyEvent}
                        onSelect={hook.onSelectPlayerButtons}
                        />

                    <span className={CSS.space}>{formatedElapsedTime}</span>
                    <Progress progressClass={CSS.space} progress={progress} buffer={bufferPos} height=".6vh" color="red"/>
                    <span className={CSS.space}>{formatedTotalTime}</span>
                    { Utils.branch(<LiveBadge className={CSS.space}/>, false)}

                    { Utils.branch(
                        <Button
                            id={`${id}_bt_player_seasons`}
                            pathKey="playlist_button"
                            routes={playlistButtonRoutes}
                            icon={faLayerGroup}
                            iconSpace="0"
                            onAction={hook.openLanguageSelector}
                            onBack={hook.onBackFromPlayer}
                            onKeyEvent={hook.onKeyEvent}
                            onSelect={hook.onSelectPlayerButtons}
                            />,
                    false) }

                    <Button
                        id={`${id}_bt_player_language`}
                        pathKey="caption_button"
                        routes={captionButtonRoutes}
                        icon={faClosedCaptioning}
                        iconSpace="0"
                        onAction={hook.openLanguageSelector}
                        onBack={hook.onBackFromPlayer}
                        onKeyEvent={hook.onKeyEvent}
                        onSelect={hook.onSelectPlayerButtons}
                        />
                </div>, 
            renderControls) }

            { Utils.branch(
                <LanguageSelector 
                    id={id}
                    audios={audios} 
                    subtitles={subtitles} 
                    onChangeAudio={onChangeAudio} 
                    onChangeSubtitle={onChangeSubtitle}
                    onCloseLanguageSelector={hook.closeLanguageSelector}
                    selectedAudio={selectedAudio}
                    selectedSubtitle={selectedSubtitle}/>
            , hook.renderLanguageSelector) }

        </React.Fragment>
    )
}

const LanguageSelector = ({ 
    id, 
    audios, 
    subtitles, 
    onChangeAudio, 
    onChangeSubtitle, 
    onCloseLanguageSelector, 
    selectedAudio, 
    selectedSubtitle 
}) => {

    return (
        <div className={CSS.captions}>
            <ListOptions
                pathKey="audio_options"
                routes={audioOptionsRoutes}
                id={`${id}_list_audios`}
                title={i18n.t("audios")}
                defaultIcon={faCircleR}
                selectedIcon={faCircleS}
                options={audios}
                selectedOption={selectedAudio}
                handleSelectOption={onChangeAudio}
                handleCancelSelection={onCloseLanguageSelector}/>

            <ListOptions
                pathKey="subtitle_options"
                routes={subtitleOptionsRoutes}
                id={`${id}_list_subtitles`}
                title={i18n.t("subtitles")}
                disabledOption={i18n.t("disabled")}
                defaultIcon={faCircleR}
                selectedIcon={faCircleS}
                options={subtitles}
                selectedOption={selectedSubtitle}
                handleSelectOption={onChangeSubtitle}
                handleCancelSelection={onCloseLanguageSelector}/>
        </div>
    )
}

BasicPlayer.defaultProps = {
    videoSource: "",
    imageSource: "",
    audios: [],
    subtitles: [],
    totalTime: Utils.momentZero(),
    elapsedTime: Utils.momentZero(),
    buffer: Utils.momentZero(),
    previewActive: true,
    activePlaybackButton: Buttons.PLAY,
    showLoading: false,
    renderControls: true,
    autoHideControls: false,
    initWithHiddenControls: true,
    onPlay: () => {},
    onPause: () => {}
}

BasicPlayer.propTypes = {
    id: PropTypes.string.isRequired,
    videoRef: PropTypes.object,
    captionsDisplayerRef: PropTypes.object,
    audios: PropTypes.array,
    subtitles: PropTypes.array,
    selectedAudio: PropTypes.string,
    selectedSubtitle: PropTypes.string,
    totalTime: PropTypes.object, //moment
    elapsedTime: PropTypes.object, //moment
    buffer: PropTypes.object, //moment
    previewActive: PropTypes.bool,
    activePlaybackButton: PropTypes.number,
    showLoading: PropTypes.bool,
    renderControls: PropTypes.bool,
    autoHideControls: PropTypes.bool,
    initWithHiddenControls: PropTypes.bool,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onChangeAudio: PropTypes.func,
    onChangeSubtitle: PropTypes.func,
    onBackKey: PropTypes.func
}

export default BasicPlayer