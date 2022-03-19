import React from 'react'
import PropTypes from 'prop-types'
import { faClosedCaptioning, faHeart, faLayerGroup, faPlay, faHeadphones, faCircle as faCircleS } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartLight, faCircle as faCircleR } from '@fortawesome/free-regular-svg-icons'
import { MediaClipTypes } from '../../../../libstream/src/Enums'
import { MediaDetailStates } from '../../actions/mediaDetailAction'
import { Constants } from '../../globals/Configuration'
import i18n from '../../globals/i18n'
import Badge from '../badge/Badge'
import Button from '../button/Button'
import LiveBadge from '../live-badge/LiveBadge'
import LogoSwitch from '../logo-switch/LogoSwitch'
import DashPlayer from '../dash-player/DashPlayer'
import Progress from '../progress/Progress'
import StarGroup from '../star-group/StarGroup'
import Timeline from '../timeline/Timeline'
import { Utils } from '../utils/Utils'
import MediaContent from './MediaContent'
import CSS from './MediaClipInfo.module.css'
import AppCSS from '../app/App.css'
import { useMediaClipInfoHook } from './MediaClipInfoHook'
import ListOptions from '../list-options/ListOptions'
import Scrollable from '../scrollable/Scrollable'
import Banner from '../banner/MediaBanner'
import styled from 'styled-components';

const buttonRoutes = {
    EVENT_UP: ["button_media_detail"],
    EVENT_DOWN: ["button_media_detail"],
}

const audioSelectorRoutes = {
    EVENT_UP: ["audio_selector"],
    EVENT_DOWN: ["audio_selector"],
}

const subtitleSelectorRoutes = {
    EVENT_UP: ["subtitle_selector"],
    EVENT_DOWN: ["subtitle_selector"],
}

const seasonsRoutes = {
    EVENT_LEFT: ["seasons"],
    EVENT_RIGHT: ["seasons"],
    EVENT_DOWN: ["episodes"]
}

const episodesRoutes = {
    EVENT_LEFT: ["episodes"],
    EVENT_RIGHT: ["episodes"],
    EVENT_UP: ["seasons"]
}

const MediaClipInfo = () => {
    
    const { 
        mediaClip,
        previewSource,
        logoSource,
        MPDSource,
        audios,
        subtitles,
        selectedAudio,
        selectedSubtitle,
        mediaClipInfoState,
        userProgress,

        handleOpenAudioSelector,
        handleOpenSubtitleSelector,
        handleOpenSeasonsBrowser,
        handleCloseAudioSelector,
        handleCloseSubtitleSelector,
        handleCloseSeasonsBrowser,
        handleChangeAudio,
        handleChangeSubtitle,
        handlePlay,
        handleBackFromMediaClipInfo,
        handleBackFromPlayer,
        handleAddRemoveFavorite

        // Deprecated
        // loadedMediaClip, 
        // showAudioSelector,
        // showSubtitleSelector,
        // handleBack,
        // handlePlayClick,
        // handlePlayerBack,
        // handleSeasonsClick,
        // handleFavoriteClick,
        // handleAudioSelectClick,
        // handleSubtitleSelectClick,

    } = useMediaClipInfoHook()

    const showAllInfos = mediaClipInfoState === MediaDetailStates.ALL_INFOS
    const audioLang = audios.find(audio => audio.language === selectedAudio)
    const subtitleLang = subtitles.find(subtitle => subtitle.language === selectedSubtitle)
    const showAudioSelector = mediaClipInfoState === MediaDetailStates.AUDIO_SELECT
    const showSubtitleSelector = mediaClipInfoState === MediaDetailStates.SUBTITLE_SELECT
    const showSeasonsBrowser = mediaClipInfoState === MediaDetailStates.SEASONS_BROWSER
    const listOptionsAudio = audios.map(audio => ({ value: audio.language, name: audio.name  }))
    const listOptionsSubtitles = subtitles.map(subtitle => ({ value: subtitle.language, name: subtitle.name  }))
    const teste = mediaClip.subMediaClips ? mediaClip.subMediaClips[0].mediaClips : []

    return (
        <React.Fragment>
            
            <DashPlayer
                id="shakaPlayer"
                autoPlay={true}
                previewSource={previewSource}
                MPDSource={MPDSource}
                audios={listOptionsAudio}
                subtitles={listOptionsSubtitles}
                selectedAudio={selectedAudio}
                selectedSubtitle={selectedSubtitle}
                onBack={handleBackFromPlayer}
                onChangeAudio={handleChangeAudio}
                onChangeSubtitle={handleChangeSubtitle}
                />

            <MediaContent show={showAudioSelector} className={`${CSS.content} ${CSS.shadow}`}>
                <div className={CSS.details}>
                    <h2>{i18n.t("audios")}</h2>
                    <ListOptions 
                        id="_list_audios"
                        pathKey="audio_selector"
                        routes={audioSelectorRoutes}
                        defaultIcon={faCircleR}
                        selectedIcon={faCircleS}
                        fontSize="2.5vh"
                        margin="1.25vh 0 1.25vh 0"
                        padding="1.5vh 3vh"
                        options={listOptionsAudio}
                        handleSelectOption={handleChangeAudio}
                        handleCancelSelection={handleCloseAudioSelector}
                        selectedOption={selectedAudio}
                        background="url(../../src/assets/general/section-background.png) repeat"/>
                </div>
            </MediaContent>

            <MediaContent show={showSubtitleSelector} className={`${CSS.content} ${CSS.shadow}`}>
                <div className={CSS.details}>
                    <h2>{i18n.t("subtitles")}</h2>
                    <ListOptions
                        id="_list_subtitles"
                        pathKey="subtitle_selector"
                        routes={subtitleSelectorRoutes}
                        defaultIcon={faCircleR}
                        selectedIcon={faCircleS}
                        disabledOption={i18n.t("disabled")}
                        fontSize="2.5vh"
                        margin="1.25vh 0 1.25vh 0"
                        padding="1.5vh 3vh"
                        options={listOptionsSubtitles}
                        handleSelectOption={handleChangeSubtitle}
                        handleCancelSelection={handleCloseSubtitleSelector}
                        selectedOption={selectedSubtitle}
                        background="url(../../src/assets/general/section-background.png) repeat"/>
                </div>
            </MediaContent>

            <MediaContent show={showSeasonsBrowser} className={`${CSS.content} ${CSS.shadow}`}>
                <div className={CSS.details}>
                    <h2>Seasons</h2>
                    <Scrollable
                        id="_seasons"
                        pathKey="seasons"
                        routes={seasonsRoutes}
                        initOffset="30vw"
                        endOffset="100vw"
                        template={seasonTemplate}
                        childWidth="7vh"
                        childHeight="7vh"
                        data={(mediaClip.subMediaClips || [])}
                        itemMargin="0 2vh 2vh 0"
                        onBack={handleCloseSeasonsBrowser}/>

                    <Scrollable
                        id="_episodes"
                        pathKey="episodes"
                        routes={episodesRoutes}
                        initOffset="30vw"
                        endOffset="100vw"
                        template={episodeTemplate}
                        childWidth="39vh"
                        childHeight="50vh"
                        data={teste}
                        itemMargin="0 2vh 0 0"
                        onBack={handleCloseSeasonsBrowser}
                        />
                </div>
            </MediaContent>

            <MediaContent show={showAllInfos} className={`${CSS.content} ${CSS.shadow}`}>
                <div className={CSS.details}>
                    { Utils.branch(<Synopsis text={mediaClip.synopsis}/>, mediaClip.synopsis) }
                    { Utils.branch(<Progress progress={userProgress} color="red" height=".5vh" progressClass={CSS.defaultBottomMargin}/>, true) }
                    
                    <div className={`${CSS.buttons} ${CSS.defaultBottomMargin}`}>
                        <Button
                            id="_bt_play"
                            icon={faPlay}
                            text={playDescription(mediaClip, userProgress)} 
                            pathKey="button_media_detail" 
                            routes={buttonRoutes}
                            onBack={handleBackFromMediaClipInfo}
                            onAction={handlePlay}
                            clickable={showAllInfos}
                            background="url(../../src/assets/general/section-background.png) repeat"
                            margin="0 0 2.5vh 0"
                            padding="1.5vh 3vh"
                            fontSize="2.5vh"
                            iconColor="white"
                            textColor="white"
                            iconSpace="1vw"/>

                        { Utils.branch(<Button 
                            id="_bt_seasons"
                            icon={faLayerGroup}
                            text={`2 ${i18n.t("seasons")}`} 
                            pathKey="button_media_detail" 
                            routes={buttonRoutes} 
                            onBack={handleBackFromMediaClipInfo}
                            onAction={handleOpenSeasonsBrowser}
                            clickable={showAllInfos}
                            background="url(../../src/assets/general/section-background.png) repeat"
                            margin="0 0 2.5vh 0"
                            padding="1.5vh 3vh"
                            fontSize="2.5vh"
                            iconColor="white"
                            textColor="white"
                            iconSpace="1vw"
                            />, mediaClip.subMediaClips) }

                        <Button
                            id="_bt_favorites"
                            icon={faHeartLight}
                            text={i18n.t("add-favorite")} 
                            pathKey="button_media_detail" 
                            routes={buttonRoutes} 
                            onBack={handleBackFromMediaClipInfo}
                            onAction={handleAddRemoveFavorite}
                            clickable={showAllInfos}
                            background="url(../../src/assets/general/section-background.png) repeat"
                            margin="0 0 2.5vh 0"
                            padding="1.5vh 3vh"
                            fontSize="2.5vh"
                            iconColor="white"
                            textColor="white"
                            iconSpace="1vw"/>

                        <Button
                            id="_bt_audios"
                            icon={faHeadphones}
                            text={`${i18n.t("audios")} ( ${audioLang ? audioLang.name : ""} )`} 
                            pathKey="button_media_detail"
                            routes={buttonRoutes}
                            onBack={handleBackFromMediaClipInfo}
                            onAction={handleOpenAudioSelector}
                            clickable={showAllInfos}
                            background="url(../../src/assets/general/section-background.png) repeat"
                            margin="0 0 2.5vh 0"
                            padding="1.5vh 3vh"
                            fontSize="2.5vh"
                            iconColor="white"
                            textColor="white"
                            iconSpace="1vw"/>

                        <Button
                            id="_bt_subtitles"
                            icon={faClosedCaptioning}
                            text={`${i18n.t("subtitles")} ${subtitleLang ? `( ${subtitleLang.name} )` : ""}`} 
                            pathKey="button_media_detail"
                            routes={buttonRoutes}
                            onBack={handleBackFromMediaClipInfo}
                            onAction={handleOpenSubtitleSelector}
                            clickable={showAllInfos}
                            background="url(../../src/assets/general/section-background.png) repeat"
                            margin="0 0 2.5vh 0"
                            padding="1.5vh 3vh"
                            fontSize="2.5vh"
                            iconColor="white"
                            textColor="white"
                            iconSpace="1vw"/>
                    </div>

                    { Utils.branch(<Timeline events={mediaClip.timeline}/>, mediaClip.timeline) }
                </div>
            </MediaContent>

            <MediaContent show={mediaClipInfoState !== MediaDetailStates.NOTHING} className={CSS.identity}>
                <LogoSwitch source={logoSource} duration={125} className={`${CSS.logo} ${CSS.defaultBottomMargin}`}/> 
                <div className={`${CSS.qualityLine} ${CSS.defaultBottomMargin}`}>
                    <Year year={mediaClip.releaseYear}/>
                    <StarGroup value={mediaClip.stars}/>
                    { Utils.branch(<Badge text={mediaClip.rating} className={CSS.defaultRightMargin}/>, mediaClip.rating) }
                    <Badge text={mediaClip.videoQuality} className={CSS.defaultRightMargin}/>
                    <Badge text={mediaClip.audioQuality} className={CSS.defaultRightMargin}/>
                    { Utils.branch(<LiveBadge/>, mediaClip.type === MediaClipTypes.LIVE_CHANNEL) } 
                </div>
            </MediaContent>

        </React.Fragment>
    )
}

const playDescription = (mediaClip, userProgress) => {
    if (userProgress > Constants.CONTINUE_WATCHING_TOLERANCE) {
        let text = i18n.t("continue-wathing")
        // FIXME
        // text += mediaClip.mediaType === MediaTypes.TV_SHOW ? " (S.01 - E.04)" : "" //TODO finalizar!
        return text
    }
    return i18n.t("play")
}

const Synopsis = ({ text }) => {
    return <p className={`${CSS.synopsis} ${CSS.defaultBottomMargin}`}>{ text }</p>
}

const Year = ({ year }) => {
    return <span className={`${CSS.year} ${CSS.defaultRightMargin}`}>{ year }</span>
}

const SeasonNumber = styled.span`
    width: 100%;
    height: 100%;
    line-height: 7vh;
    text-align: center;
    display: block;
    font-size: 3vh;
    font-family: "Bold";
    border-radius: .5vh;
    background: #f3f3f3;
    color: #353535;
`

const seasonTemplate = (season, rendered) => {
    return Utils.branch(<SeasonNumber>{season.number}</SeasonNumber>, true) 
}

const Episode = styled.div`
    border-radius: .5vh;
    background: #101010;
    height: 100%;
    overflow: hidden;
`

const episodeTemplate = (episode, rendered) => {
    return Utils.branch(
        <Episode>
            <Banner imagePath={episode.preview} name={episode.title} height="20vh"/>
            <h3 className={CSS.episodeTitle}>{episode.title}</h3>
            <p className={CSS.episodeSynopsis}>{episode.synopsis}</p>
        </Episode>
    , true)
}

// { Utils.branch(<ExtraInfo title={""} description={""}/>, false) }
// const ExtraInfo = ({ title, description }) => {
//     return (
//         <span className={css.extraInfo}>
//             <h3>{ title }</h3>
//             { description ? <p>{ description }</p> : null }
//         </span>
//     )
// }

MediaClipInfo.defaultProps = {
    test: "",
}

MediaClipInfo.propTypes = {
    test: PropTypes.string.isRequired,
}

export default MediaClipInfo