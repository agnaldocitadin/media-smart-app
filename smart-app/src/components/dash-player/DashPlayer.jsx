import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useShakaPlayerHook } from './ShakaPlayerHook'
import BasicPlayer from '../basic-player/BasicPlayer'

const DashPlayer = (props) => {
    
    const {
        id,
        previewSource,
        audios,
        subtitles,
        selectedAudio,
        selectedSubtitle,
        renderControls,
        autoHideControls,
        initWithHiddenControls,
        onChangeAudio,
        onChangeSubtitle
    } = props
    
    const { 
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
    } = useShakaPlayerHook(props)

    return (
        
        <BasicPlayer
            id={id}
            videoRef={dashVideoRef}
            captionsDisplayerRef={captionsDisplayerRef}
            previewSource={previewSource}
            audios={audios}
            subtitles={subtitles}
            elapsedTime={elapsedTime}
            totalTime={totalTime}
            previewActive={previewActive}
            activePlaybackButton={activePlaybackButton}
            showLoading={isLoading}
            autoHideControls={autoHideControls}
            renderControls={renderControls}
            initWithHiddenControls={initWithHiddenControls}
            selectedAudio={selectedAudio}
            selectedSubtitle={selectedSubtitle}
            onPlay={play}
            onPause={pause}
            onBackKey={back}
            onChangeAudio={onChangeAudio}
            onChangeSubtitle={onChangeSubtitle}/>
    )
}

DashPlayer.defaultProps = {
    autoPlay: false,
    audios: [],
    subtitles: [],
    renderControls: true,
    autoHideControls: true,
    initWithHiddenControls: true,
    onPlay: () => null,
    onPause: () => null,
    onChangeAudio: () => null,
    onChangeSubtitle: () => null,
    onBack: () => null
}

DashPlayer.propTypes = {
    id: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    MPDSource: PropTypes.string,
    previewSource: PropTypes.string,
    audios: PropTypes.array,
    subtitles: PropTypes.array,
    selectedAudio: PropTypes.string,
    selectedSubtitle: PropTypes.string,
    renderControls: PropTypes.bool,
    autoHideControls: PropTypes.bool,
    initWithHiddenControls: PropTypes.bool,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onChangeAudio: PropTypes.func,
    onChangeSubtitle: PropTypes.func,
    onBack: PropTypes.func
}

export default DashPlayer